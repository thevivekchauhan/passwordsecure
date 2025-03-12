import React, { useState } from "react";
import PasswordInput from "./components/PasswordInput";
import StrengthMeter from "./components/StrengthMeter";
import CrackTime from "./components/CrackTime";
import Tips from "./components/Tips";
import SecurityImportance from "./components/SecurityImportance";
import OtherWaysToProtect from "./components/OtherWaysToProtect";
import { checkPasswordStrength } from "./utils/passwordStrength";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import "./styles/BackgroundVideo.css";
import myVideo from "./assets/videos/4th.mp4";  // Updated import path

const App = () => {
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const { score, crackTime } = checkPasswordStrength(password);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <video 
        className="video-background"
        src={myVideo} 
        type="video/mp4" 
        autoPlay 
        muted 
        loop
      />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="card">
        <PasswordInput password={password} setPassword={setPassword} />
        <StrengthMeter percentage={score} />
        <CrackTime crackTime={crackTime} />
      </div>
      <div className="components-container">
        <div className="component-item">
          <Tips />
        </div>
        <div className="component-item">
          <OtherWaysToProtect />
        </div>
        <div className="component-item">
          <SecurityImportance />
        </div>
      </div>
    </div>
  );
};

export default App;