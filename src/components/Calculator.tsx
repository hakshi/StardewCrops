import SeasonPickerTest from "./SeasonPicker";
import CropsChart from "./CropsChart";
import { useState } from "react";

const Calculator = () => {
  // State for the selected season in the parent component.
  const [selectedSeason, setSelectedSeason] = useState(0);

  // Function to handle updates from the child component
  const handleSeasonChange = (index: number) => {
    setSelectedSeason(index);
  };

  return (
    <>
      <SeasonPickerTest
        defaultSeason={selectedSeason}
        onSeasonChange={handleSeasonChange}
      />
      <CropsChart selectedSeason={selectedSeason} />
    </>
  );
};

export default Calculator;
