import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const { theme } = useContext(ThemeContext);

  const appStyle = {
    height: "100vh",
    backgroundColor: theme === "light" ? "#fefefe" : "#121212",
    color: theme === "light" ? "#000" : "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <div style={appStyle}>
      <h1>🌗 Theme Switcher</h1>
      <p>Current theme: {theme}</p>
      <ThemeSwitcher />
    </div>
  );
}

export default App;
