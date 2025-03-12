import React from 'react';
import { FaSun, FaMoon, FaShieldAlt } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <div className="nav-brand">
        <FaShieldAlt className="logo-icon" />
      </div>
      
      <h1 className="website-title">SecurePass</h1>

      <div className="nav-end">
        <button onClick={toggleDarkMode} className="theme-toggle">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;