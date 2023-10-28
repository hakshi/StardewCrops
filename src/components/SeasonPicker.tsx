import { useState } from "react";

interface Props {
  defaultSeason: number;
  onSeasonChange: (index: number) => void;
  defaultDays: number;
  onDaysChange: (days: number) => void;
}

function SeasonPickerTest({
  defaultSeason,
  onSeasonChange,
  defaultDays,
  onDaysChange,
}: Props) {
  let seasonsList = ["Spring", "Summer", "Fall", "Winter"];
  const [selectedSeason, setSelectedSeason] = useState(defaultSeason);
  const [growthDays, setGrowthDays] = useState(defaultDays);

  const handleItemClick = (index: number) => {
    setSelectedSeason(index);
    onSeasonChange(index);
  };

  const handleGrowthDaysChange = (days: number) => {
    setGrowthDays(days);
    onDaysChange(days);
  };

  return (
    <div id="container">
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
              handleItemClick(index);
              console.log(index);
            }}
          >
            {season}
          </li>
        ))}
      </ul>
      <label>
        Growth Days:
        <input
          type="number"
          value={growthDays}
          onChange={(e) => handleGrowthDaysChange(parseInt(e.target.value))}
        />
      </label>
    </div>
  );
}

export default SeasonPickerTest;
