const Todo = require("../models/todoModel");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.getAll();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: "Error fetching todos" });
  }
};

const getTodoById = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.getById(id);
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: "Error fetching todo" });
  }
};

const createTodo = async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  try {
    await Todo.create(title);
    res.status(201).json({ message: "Todo created successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error creating todo" });
  }
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  try {
    const updated = await Todo.update(id, { title, completed });
    if (!updated) return res.status(404).json({ error: "Todo not found" });
    res.json({ message: "Todo updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error updating todo" });
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Todo.delete(id);
    if (!deleted) return res.status(404).json({ error: "Todo not found" });
    res.json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting todo" });
  }
};

module.exports = { getTodos, getTodoById, createTodo, updateTodo, deleteTodo };
