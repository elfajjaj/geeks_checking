import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskItem({ task }) {
  const { dispatch } = useContext(TaskContext);

  return (
    <li
      style={{
        marginBottom: "10px",
        textDecoration: task.completed ? "line-through" : "none",
      }}
    >
      <span onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}>
        {task.text}
      </span>
      <button
        onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}
        style={{
          marginLeft: "10px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          padding: "5px 8px",
          borderRadius: "5px",
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
