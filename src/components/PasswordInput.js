import React from "react";
import "../styles/PasswordInput.css";

const PasswordInput = ({ password, setPassword }) => {
  return (
    <input
      type="password"
      className="password-input"
      placeholder="Enter password..."
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  );
};

export default PasswordInput;