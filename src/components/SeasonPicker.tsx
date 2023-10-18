import { useState } from "react";

interface Props {
  defaultSeason: number;
  onSeasonChange: (index: number) => void;
}

function SeasonPickerTest({ defaultSeason, onSeasonChange }: Props) {
  let seasonsList = ["Spring", "Summer", "Fall", "Winter"];
  const [selectedSeason, setSelectedSeason] = useState(defaultSeason);

  const handleItemClick = (index: number) => {
    setSelectedSeason(index);
    onSeasonChange(index);
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
    </div>
  );
}

export default SeasonPickerTest;
