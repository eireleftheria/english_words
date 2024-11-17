import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle">
      <button onClick={() => toggleTheme("light")}>Светлая тема</button>
      <button onClick={() => toggleTheme("dark")}>Темная тема</button>
    </div>
  );
};
export default ThemeToggle;
