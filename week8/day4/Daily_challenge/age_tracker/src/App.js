import React from "react";
import AgeDisplay from "./components/AgeDisplay";
import AgeControls from "./components/AgeControls";

function App() {
  return (
    <div style={{ fontFamily: "Arial", marginTop: "50px" }}>
      <h1 style={{ textAlign: "center" }}>🧠 Age Tracker - Redux Thunk</h1>
      <AgeDisplay />
      <AgeControls />
    </div>
  );
}

export default App;
