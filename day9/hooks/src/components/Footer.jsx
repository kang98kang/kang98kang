import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import UseContextApp1 from "../UseContextApp1";

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const handleClick = () => {
    setIsDark(!isDark);
  };
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
      }}
    >
      <button className="button" onClick={handleClick}>
        Click me!
      </button>
    </footer>
  );
};

export default Footer;
