import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, deleteTask } from "../features/planner/plannerSlice";

function TaskItem({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleSave = () => {
    dispatch(editTask({ id: task.id, newText }));
    setIsEditing(false);
  };

  return (
    <li style={{ marginBottom: "10px" }}>
      {isEditing ? (
        <>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            style={{ padding: "5px" }}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button
            onClick={() => setIsEditing(true)}
            style={{ marginLeft: "10px" }}
          >
            Edit
          </button>
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            style={{ marginLeft: "5px", color: "red" }}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
