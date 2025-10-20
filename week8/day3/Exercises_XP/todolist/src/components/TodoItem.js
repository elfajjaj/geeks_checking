import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../features/todos/todoSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "gray" : "black",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>
      <button
        onClick={() => dispatch(removeTodo(todo.id))}
        style={{
          padding: "5px 10px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
