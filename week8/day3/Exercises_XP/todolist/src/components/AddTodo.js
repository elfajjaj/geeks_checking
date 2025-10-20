import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new task"
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          width: "250px",
        }}
      />
      <button
        onClick={handleAdd}
        style={{
          marginLeft: "10px",
          padding: "10px 15px",
          border: "none",
          borderRadius: "6px",
          backgroundColor: "#28a745",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
