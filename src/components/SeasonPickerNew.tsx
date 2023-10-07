import { useState } from "react";

function SeasonPickerTest() {
  let seasonsList = ["Spring", "Summer", "Fall", "Winter"];
  const [selectedSeason, setSelectedSeason] = useState(0);

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
              setSelectedSeason(index);
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
