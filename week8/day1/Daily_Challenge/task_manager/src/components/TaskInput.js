import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskInput() {
  const { dispatch, inputRef } = useContext(TaskContext);

  const addTask = () => {
    const text = inputRef.current.value.trim();
    if (text) {
      dispatch({ type: "ADD_TASK", payload: text });
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Enter a task..." />
      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default TaskInput;
