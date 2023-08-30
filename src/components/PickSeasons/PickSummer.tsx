import { useState } from "react";

// Togglable switch for the Summer season.
// Checks the state of the toggle switch for Summer and
// returns whether the season is selected or not.
// The SeasonPicker component then changes what crops are shown based on
// which seasons are picked.

const PickSummer = () => {
  const [summer, setSummer] = useState(false);
  const toggleSwitch = () => setSummer((previousState) => !previousState);

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckSummer"
        onChange={toggleSwitch}
      />
      <label className="form-check-label">Summer</label>
    </div>
  );
};

export default PickSummer;
