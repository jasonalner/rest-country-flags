import React, { useState } from "react";
import { FaRegMoon, FaSun } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className={isDarkMode ? "dark" : "light"}>
      <h1 className="title">Where in the world?</h1>
      <button className="mode-toggle" onClick={toggleMode}>
        {isDarkMode ? <FaSun /> : <FaRegMoon />}
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
