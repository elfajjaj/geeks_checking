import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function AddTask() {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TaskContext);

  const handleAdd = () => {
    if (text.trim() !== "") {
      dispatch({ type: "ADD_TASK", payload: text });
      setText("");
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "250px",
        }}
      />
      <button
        onClick={handleAdd}
        style={{
          marginLeft: "10px",
          padding: "10px 15px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#4CAF50",
          color: "white",
        }}
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
