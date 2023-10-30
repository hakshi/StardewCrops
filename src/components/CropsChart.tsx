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
}

// Interface for useState call for setLoadedIcons function
interface LoadedIcons {
  [key: string]: string;
}

// Function to render the CropsChart based on the selected state
// passed from the SeasonPicker component.
function CropsChart({ selectedSeason, growthDays }: Props) {
  const [loadedIcons, setLoadedIcons] = useState<LoadedIcons>({});
  const dataForCurrentSeason = crops2DArray[selectedSeason];

  // Calculate the sell value of the crop.
  // If the crop cannot be grown with the current growthDays state
  // then set value to 0
  const calculateBarValue = (crop: (typeof dataForCurrentSeason)[0]) => {
    if (crop.initialGrow > growthDays) {
      return 0;
    }
    return (crop.baseSell / (crop.initialGrow + crop.regrow)) * growthDays;
  };

  // Sort the data for the current season based on the calculated value
  const sortedData = [...dataForCurrentSeason].sort((a, b) => {
    const aValue = calculateBarValue(a);
    const bValue = calculateBarValue(b);
    return bValue - aValue; // For descending order
  });

  // Function to preload all crop thumbnails for bar
  useEffect(() => {
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
  }, [selectedSeason, dataForCurrentSeason]); // The effect depends on the selected season

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
