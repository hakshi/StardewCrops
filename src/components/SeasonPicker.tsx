import { useState } from "react";
import PickSpring from "./PickSeasons/PickSpring";
import PickSummer from "./PickSeasons/PickSummer";

const SeasonPicker = () => {
  const [season, setSeason] = useState("spring");

  return (
    <>
      <PickSpring />
      <PickSummer />
    </>
  );
};

export default SeasonPicker;
