import SeasonPickerTest from "./SeasonPicker";
import CropsChart from "./CropsChart";
import { useState } from "react";

const Calculator = () => {
  // State for the selected season in the parent component.
  const [selectedSeason, setSelectedSeason] = useState(0);
  const [growthDays, setGrowthDays] = useState(28);

  // Function to handle updates from the child component
  const handleSeasonChange = (index: number) => {
    setSelectedSeason(index);
  };

  const handleGrowthDays = (days: number) => {
    setGrowthDays(days);
  };

  return (
    <div style={styles.container}>
      <div style={styles.cropsChart}>
        <CropsChart selectedSeason={selectedSeason} growthDays={growthDays} />
      </div>
      <div style={styles.seasonPicker}>
        <SeasonPickerTest
          defaultSeason={selectedSeason}
          onSeasonChange={handleSeasonChange}
          defaultDays={growthDays}
          onDaysChange={handleGrowthDays}
        />
      </div>
    </div>
  );
};

export default Calculator;

const styles: {
  container: React.CSSProperties;
  seasonPicker: React.CSSProperties;
  cropsChart: React.CSSProperties;
} = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  seasonPicker: {
    // flex: 1,
    marginTop: 50,
  },
  cropsChart: {
    // flex: 3,
  },
};
