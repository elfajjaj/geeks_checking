import React from "react";
import Customers from "./Components/Customers.js";

function App() {
  return (
    <div>
      <header
        style={{ backgroundColor: "#222", color: "white", padding: "20px", textAlign: "center" }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React"
          style={{ width: "80px" }}
        />
        <h2>React & Express</h2>
      </header>
      <Customers />
    </div>
  );
}

export default App;
