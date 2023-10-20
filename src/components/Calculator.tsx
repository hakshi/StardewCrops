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
    <div style={styles.container}>
      <div style={styles.seasonPicker}>
        <SeasonPickerTest
          defaultSeason={selectedSeason}
          onSeasonChange={handleSeasonChange}
        />
      </div>
      <div style={styles.cropsChart}>
        <CropsChart selectedSeason={selectedSeason} />
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
  },
  cropsChart: {
    // flex: 3,
  },
};
