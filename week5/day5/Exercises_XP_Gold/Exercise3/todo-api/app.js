import express from "express";

const app = express();
const PORT = 5000;

// Middleware باش نقرا JSON
app.use(express.json());

// 📝 Array مؤقت باش نخزن todos
let todos = [];
let nextId = 1; // Auto-increment id

// 🟢 Create todo
app.post("/api/todos", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required ❌" });
  }

  const newTodo = {
    id: nextId++,
    title,
    completed: false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// 🟢 Get all todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// 🟢 Get one todo
app.get("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found ❌" });
  }

  res.json(todo);
});

// 🟢 Update todo
app.put("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;

  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found ❌" });
  }

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

// 🟢 Delete todo
app.delete("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Todo not found ❌" });
  }

  const deletedTodo = todos.splice(index, 1);
  res.json({ message: "Todo deleted ✅", deleted: deletedTodo });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
