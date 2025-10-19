import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function FilterButtons() {
  const { dispatch, state } = useContext(TaskContext);

  const filters = ["all", "active", "completed"];

  return (
    <div style={{ marginTop: "10px" }}>
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => dispatch({ type: "FILTER_TASKS", payload: f })}
          style={{
            margin: "5px",
            backgroundColor: state.filter === f ? "#333" : "#ccc",
            color: state.filter === f ? "#fff" : "#000",
          }}
        >
          {f.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
