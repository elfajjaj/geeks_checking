import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../redux/todoActions";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <li key={todo.id} style={{ marginBottom: "10px" }}>
          <span
            onClick={() => dispatch(toggleTodo(todo.id))}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
