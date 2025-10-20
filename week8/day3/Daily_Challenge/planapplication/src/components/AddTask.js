import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/planner/plannerSlice";

function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() !== "") {
      dispatch(addTask(text));
      setText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "10px", borderRadius: "6px", width: "250px" }}
      />
      <button
        onClick={handleAdd}
        style={{
          marginLeft: "10px",
          backgroundColor: "#4caf50",
          border: "none",
          color: "white",
          padding: "10px 15px",
          borderRadius: "6px",
        }}
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
