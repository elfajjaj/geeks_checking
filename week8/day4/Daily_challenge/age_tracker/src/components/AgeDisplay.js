import React from "react";
import { useSelector } from "react-redux";
function AgeDisplay() {
  const { value, loading } = useSelector((state) => state.age);

  return (
    <div style={{ textAlign: "center", margin: "30px" }}>
      <h2>🎂 Current Age: {value}</h2>
      {loading && (
        <div>
          <img src="https://i.gifer.com/YCZH.gif" alt="Loading..." width="50" />{" "}
          <p>Updating age...</p>
        </div>
      )}
    </div>
  );
}

export default AgeDisplay;
