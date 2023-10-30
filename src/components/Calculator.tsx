import CropsChart from "./CropsChart";
import { useState } from "react";
import ControlPanel from "./ControlPanel";

const Calculator = () => {
  // State for the selected season in the parent component.
  const [selectedSeason, setSelectedSeason] = useState(0);
  const [growthDays, setGrowthDays] = useState(28);
  const [selectedFertilizer, setSelectedFertilizer] = useState(0);
  const [farmingLevel, setFarmingLevel] = useState(0);

  // Function to handle updates from the child component
  const handleSeasonChange = (index: number) => {
    setSelectedSeason(index);
  };

  const handleGrowthDays = (days: number) => {
    setGrowthDays(days);
  };

  const handleFertilizerChange = (index: number) => {
    setSelectedFertilizer(index);
  };

  const handleFarmingLevelChange = (farmingLevel: number) => {
    setFarmingLevel(farmingLevel);
  };

  return (
    <div style={styles.container}>
      <div style={styles.cropsChart}>
        <CropsChart
          selectedSeason={selectedSeason}
          growthDays={growthDays}
          selectedFertilizer={selectedFertilizer}
        />
      </div>
      <div style={styles.seasonPicker}>
        <ControlPanel
          defaultSeason={selectedSeason}
          onSeasonChange={handleSeasonChange}
          defaultDays={growthDays}
          onDaysChange={handleGrowthDays}
          defaultFertilizer={selectedFertilizer}
          onFertilizerChange={handleFertilizerChange}
          defaultFarmingLevel={farmingLevel}
          onFarmingLevelChange={handleFarmingLevelChange}
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
