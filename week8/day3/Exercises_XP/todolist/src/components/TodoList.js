import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.length === 0 ? (
        <p>No tasks yet 😴</p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </ul>
  );
}

export default TodoList;
