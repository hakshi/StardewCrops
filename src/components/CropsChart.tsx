import { useState, useEffect } from "react";
import crops2DArray from "../assets/CropsTest";
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
  // const [growthDays, setGrowthDays] = useState(7);

  useEffect(() => {
    // Function to preload all images
    const preloadIcons = async () => {
      const icons: LoadedIcons = {};

      for (const crop of dataForCurrentSeason) {
        const module = await import(`../assets/img/${crop.img}`);
        icons[crop.name] = module.default;
      }

      setLoadedIcons(icons);
    };

    preloadIcons();
  }, [selectedSeason]); // The effect depends on the selected season

  // CustomTick is created using Recharts, documentation
  // describes how to use the tick field in the XAxis component.
  const CustomTick = (props: any) => {
    const { x, y, payload } = props;

    const iconSrc = loadedIcons[payload.value];

    console.log("payload.value:", payload.value, "iconSrc:", iconSrc);

    if (!iconSrc) {
      return null;
    }

    return (
      <g transform={`translate(${x},${y})`}>
        <image x={-10} y={-10} xlinkHref={iconSrc} width="20" height="20" />
      </g>
    );
  };

  return (
    <div style={styles.container}>
      {/* <label>
        Growth Days:
        <input
          type="number"
          value={growthDays}
          onChange={(e) => setGrowthDays(parseInt(e.target.value))}
        />
      </label> */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={1000} height={800} data={dataForCurrentSeason}>
          <XAxis dataKey="name" tick={<CustomTick />} />
          <YAxis />
          <Tooltip
            formatter={(value: number) => `$${value.toFixed(2)}`}
            labelFormatter={(name: string) => `Crop: ${name}`}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey={(crop) =>
              (crop.baseSell / (crop.initialGrow + crop.regrow)) * growthDays
            }
            fill="#8884d8"
          />
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
