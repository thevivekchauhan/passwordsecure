import React from "react";
import "../styles/CrackTime.css";

const CrackTime = ({ crackTime }) => {
  return <p className="crack-time">Time to Crack: {crackTime}</p>;
};

export default CrackTime;