import { useState } from "react";

// Togglable switch for the Spring season.
// Checks the state of the toggle switch for Spring and
// returns whether the season is selected or not.
// The SeasonPicker component then changes what crops are shown based on
// which seasons are picked.

const PickSpring = () => {
  const [spring, setSpring] = useState(false);
  const toggleSwitch = () => setSpring((previousState) => !previousState);

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        checked={spring}
        onChange={toggleSwitch}
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
        Spring
      </label>
    </div>
  );
};

export default PickSpring;
