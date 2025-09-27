import { TodoList } from "./todo.js";

const myTodo = new TodoList();

myTodo.addTask("Learn Node.js");
myTodo.addTask("Practice Express.js");
myTodo.addTask("Build a Todo App");

myTodo.completeTask("Learn Node.js");
myTodo.completeTask("Build a Todo App");

myTodo.listTasks();





