import React from "react";
import { useDispatch } from "react-redux";
import { ageUpAsync, ageDownAsync } from "../redux/ageSlice";

function AgeControls() {
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center" }}>
      <button
        onClick={() => dispatch(ageUpAsync())}
        style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
      >
        ➕ Age Up
      </button>
      <button
        onClick={() => dispatch(ageDownAsync())}
        style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
      >
        ➖ Age Down
      </button>
    </div>
  );
}

export default AgeControls;
