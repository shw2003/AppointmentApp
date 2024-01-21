import React, { useState } from "react";

const StepTwo = () => {
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [campany, setCampany] = useState("");
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
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>City</label>
          <input
            className="u-full-width"
            placeholder="city"
            type="tel"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>Campany</label>
          <input
            className="u-full-width"
            placeholder="campany"
            type="text"
            value={campany}
            onChange={(e) => setCampany(e.target.value)}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
