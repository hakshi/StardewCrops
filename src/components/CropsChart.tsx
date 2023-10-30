import { useState, useEffect } from "react";
import crops2DArray from "../assets/Crops";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Interface for Props for CropsChart function
interface Props {
  selectedSeason: number;
  growthDays: number;
  selectedFertilizer: number;
  farmingLevel: number;
}

// Interface for useState call for setLoadedIcons function
interface LoadedIcons {
  [key: string]: string;
}

// Function to render the CropsChart based on the selected state
// passed from the SeasonPicker component.
function CropsChart({
  selectedSeason,
  growthDays,
  selectedFertilizer,
  farmingLevel,
}: Props) {
  const [loadedIcons, setLoadedIcons] = useState<LoadedIcons>({});
  const dataForCurrentSeason = crops2DArray[selectedSeason];

  // Calculate the sell value of the crop.
  // If the crop cannot be grown with the current growthDays state
  // then set value to 0
  const calculateBarValue = (crop: (typeof dataForCurrentSeason)[0]) => {
    if (crop.initialGrow > growthDays) {
      return 0;
    }
    // variable to store growthTime changes based on speed increasing fertilizer
    let growthTimeModifier = 1;
    // variable to store sellPrice changes based on quality increasing fertilizer
    // and farmingLevel
    let sellPriceModifier = 1;
    if (selectedFertilizer == 0) {
      // no fertilizer
      if (farmingLevel == 0) {
        sellPriceModifier = 1.01;
      } else {
        sellPriceModifier = 1.01 + (0.24 / 14) * farmingLevel;
      }
      return (
        ((crop.baseSell * sellPriceModifier) /
          (crop.initialGrow + crop.regrow)) *
        growthDays
      );
    } else if (selectedFertilizer > 0 && selectedFertilizer < 4) {
      // sellprice increase
      if (selectedFertilizer == 1) {
        // basic fertilizer
        if (farmingLevel == 0) {
          sellPriceModifier = 1.04;
        } else {
          sellPriceModifier = 1.04 + (0.32 / 14) * farmingLevel;
        }
      } else if (selectedFertilizer == 2) {
        // quality fertilizer
        if (farmingLevel == 0) {
          sellPriceModifier = 1.07;
        } else {
          sellPriceModifier = 1.07 + (0.37 / 14) * farmingLevel;
        }
      } else {
        // selectedFertilizer == 3, deluxe fertilizer
        if (farmingLevel == 0) {
          sellPriceModifier = 1.32;
        } else {
          sellPriceModifier = 1.32 + (0.45 / 14) * farmingLevel;
        }
      }
      // Fertilizer increases baseSell price
      return (
        ((crop.baseSell * sellPriceModifier) /
          (crop.initialGrow + crop.regrow)) *
        growthDays
      );
    } else {
      // growthTime decrease
      if (selectedFertilizer == 4) {
        // Speed-Gro
        growthTimeModifier = 0.9;
      } else if (selectedFertilizer == 5) {
        // Deluxe Speed-Gro
        growthTimeModifier = 0.75;
      } else {
        // selectedFertilizer == 6 Hyper Speed-Gro
        growthTimeModifier = 0.66;
      }
      // Fertilizer decreases initialGrow time
      return (
        (crop.baseSell /
          (crop.initialGrow * growthTimeModifier + crop.regrow)) *
        growthDays
      );
    }
  };

  // Sort the data for the current season based on the calculated value
  const sortedData = [...dataForCurrentSeason].sort((a, b) => {
    const aValue = calculateBarValue(a);
    const bValue = calculateBarValue(b);
    return bValue - aValue; // For descending order
  });

  // Function to preload all crop thumbnails for bar
  useEffect(() => {
    const dataForCurrentSeason = crops2DArray[selectedSeason];

    const preloadIcons = async () => {
      const icons: LoadedIcons = {};

      for (const crop of dataForCurrentSeason) {
        try {
          const module = await import(`../assets/img/${crop.img}`);
          icons[crop.name] = module.default;
        } catch (error) {
          console.error("Error loading icon for", crop.name, ":", error);
        }
      }

      setLoadedIcons(icons);
    };

    preloadIcons();
  }, [selectedSeason]); // The effect now onhly depends on the selected season

  // CustomTick is created using Recharts, documentation
  // describes how to use the tick field in the XAxis component.
  const CustomTick = ({ x, y, payload }: any) => {
    const iconSrc = loadedIcons[payload.value];

    if (!iconSrc) {
      return null;
    }

    return (
      <g transform={`translate(${x},${y})`}>
        <image x={-10} y={-10} xlinkHref={iconSrc} width="30" height="30" />
      </g>
    );
  };

  return (
    <div style={styles.container}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={1000} height={800} data={sortedData}>
          <XAxis dataKey="name" tick={<CustomTick />} />
          <YAxis />
          <Tooltip
            formatter={(value: number) => `$${value.toFixed(2)}`}
            labelFormatter={(name: string) => `Crop: ${name}`}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey={calculateBarValue} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CropsChart;

const styles = {
  container: {
    width: 1000,
    height: 500,
  },
};
