import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        margin: "20px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        backgroundColor: theme === "light" ? "#333" : "#f4f4f4",
        color: theme === "light" ? "#fff" : "#000",
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

export default ThemeSwitcher;
