import React, { useState } from "react";

const StepOne = () => {
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div>
      <div className="row">
        <div className="six columns">
          <label>First Name</label>
          <input
            className="u-full-width"
            placeholder="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            autoFocus
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>Phone</label>
          <input
            className="u-full-width"
            placeholder="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default StepOne;
