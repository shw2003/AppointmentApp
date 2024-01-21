import React from "react";

const StepOne = () => {
  return (
    <div>
      <div className="row">
        <div className="six columns">
          <label>First Name</label>
          <input
            className="u-full-width"
            placeholder="firstName"
            type="text"
            value=""
            autoFocus
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>Phone</label>
          <input
            className="u-full-width"
            placeholder="lastName"
            type="tel"
            value=""
          />
        </div>
      </div>
    </div>
  );
};

export default StepOne;
