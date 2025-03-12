import React from "react";
import "../styles/StrengthMeter.css";

const StrengthMeter = ({ percentage }) => {
  return (
    <div className="strength-meter">
      <p>Strength: {percentage}%</p>
      <div className="meter-bar">
        <div
          className="meter-fill"
          style={{ width: `${percentage}%`, backgroundColor: percentage > 70 ? "#4CAF50" : percentage > 40 ? "#FFC107" : "#F44336" }}
        ></div>
      </div>
    </div>
  );
};

export default StrengthMeter;