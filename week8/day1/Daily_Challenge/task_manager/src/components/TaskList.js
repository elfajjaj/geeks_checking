import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { state, dispatch } = useContext(TaskContext);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const filteredTasks = state.tasks.filter((t) => {
    if (state.filter === "completed") return t.completed;
    if (state.filter === "active") return !t.completed;
    return true;
  });

  return (
    <ul>
      {filteredTasks.map((t) => (
        <li key={t.id}>
          {editId === t.id ? (
            <>
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button
                onClick={() => {
                  dispatch({
                    type: "EDIT_TASK",
                    payload: { id: t.id, text: editText },
                  });
                  setEditId(null);
                }}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <span
                style={{
                  textDecoration: t.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
                onClick={() => dispatch({ type: "TOGGLE_TASK", payload: t.id })}
              >
                {t.text}
              </span>
              <button onClick={() => setEditId(t.id) || setEditText(t.text)}>
                Edit
              </button>
              <button
                onClick={() => dispatch({ type: "DELETE_TASK", payload: t.id })}
              >
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
