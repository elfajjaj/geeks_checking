import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoActions";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
