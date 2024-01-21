import React from "react";

const StepTwo = () => {
  return (
    <div>
      <div className="row">
        <div className="six columns">
          <label>Age</label>
          <input
            className="u-full-width"
            placeholder="age"
            type="text"
            autoFocus
            value=""
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>City</label>
          <input className="u-full-width" placeholder="city" type="tel" />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>Campany</label>
          <input
            className="u-full-width"
            placeholder="campany"
            type="text"
            value=""
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
