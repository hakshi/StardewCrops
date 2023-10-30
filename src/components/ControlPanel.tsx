import { useState } from "react";

interface Props {
  defaultSeason: number;
  onSeasonChange: (index: number) => void;
  defaultDays: number;
  onDaysChange: (days: number) => void;
  defaultFertilizer: number;
  onFertilizerChange: (index: number) => void;
  defaultFarmingLevel: number;
  onFarmingLevelChange: (farmingLevel: number) => void;
}

function ControlPanel({
  defaultSeason,
  onSeasonChange,
  defaultDays,
  onDaysChange,
  defaultFertilizer,
  onFertilizerChange,
  defaultFarmingLevel,
  onFarmingLevelChange,
}: Props) {
  let seasonsList = ["Spring", "Summer", "Fall", "Winter"];
  let fertilizerList = [
    "None",
    "Basic Fertilizer",
    "Quality Fertilizer",
    "Deluxe Fertilizer",
    "Speed-Gro",
    "Deluxe Speed-Gro",
    "Hyper Speed-Gro",
  ];
  // All state variables
  const [selectedSeason, setSelectedSeason] = useState(defaultSeason);
  const [growthDays, setGrowthDays] = useState(defaultDays);
  const [selectedFertilizer, setSelectedFertilizer] =
    useState(defaultFertilizer);
  const [farmingLevel, setFarmingLevel] = useState(defaultFarmingLevel);

  // State variable handlers
  const handleSeasonClick = (index: number) => {
    setSelectedSeason(index);
    onSeasonChange(index);
  };

  const handleGrowthDaysChange = (days: number) => {
    setGrowthDays(days);
    onDaysChange(days);
  };

  const handleFertilizerClick = (index: number) => {
    setSelectedFertilizer(index);
    onFertilizerChange(index);
  };

  const handleFarmingLevelChange = (farmingLevel: number) => {
    setFarmingLevel(farmingLevel);
    onFarmingLevelChange(farmingLevel);
  };

  return (
    <div style={styles.controlPanelContainer}>
      <div className="seasonPicker">
        <ul className="list-group">
          {seasonsList.map((season, index) => (
            <li
              className={
                selectedSeason === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={season}
              onClick={() => {
                handleSeasonClick(index);
                console.log(index);
              }}
            >
              {season}
            </li>
          ))}
        </ul>
      </div>
      <div className="growthDays">
        <label>
          Growth Days:
          <input
            type="number"
            value={growthDays}
            onChange={(e) => handleGrowthDaysChange(parseInt(e.target.value))}
            min="0"
            max="28"
          />
        </label>
      </div>
      <div className="fertilizerPicker">
        <ul className="list-group">
          {fertilizerList.map((fertilizer, index) => (
            <li
              className={
                selectedFertilizer === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={fertilizer}
              onClick={() => {
                handleFertilizerClick(index);
                console.log(index);
              }}
            >
              {fertilizer}
            </li>
          ))}
        </ul>
      </div>
      <div className="farmingLevel">
        <label>
          Farming Level:
          <input
            type="number"
            value={farmingLevel}
            onChange={(e) => handleFarmingLevelChange(parseInt(e.target.value))}
            min="0"
            max="14"
          />
        </label>
      </div>
    </div>
  );
}

const styles = {
  controlPanelContainer: {
    display: "flex",
  },
  seasonPicker: {},
};

export default ControlPanel;
