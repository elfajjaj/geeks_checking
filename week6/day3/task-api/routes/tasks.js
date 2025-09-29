
const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const tasksFile = path.join(__dirname, "../tasks.json");


function readTasks() {
  try {
    const data = fs.readFileSync(tasksFile, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}


function writeTasks(tasks) {
  fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
}


router.get("/", (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});


router.get("/:id", (req, res) => {
  const tasks = readTasks();
  const task = tasks.find((t) => t.id === parseInt(req.params.id));

  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
});


router.post("/", (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "Title and description are required" });
  }

  const tasks = readTasks();
  const newTask = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    description,
    completed: false,
  };

  tasks.push(newTask);
  writeTasks(tasks);

  res.status(201).json(newTask);
});

router.put("/:id", (req, res) => {
  const { title, description, completed } = req.body;
  const tasks = readTasks();
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(req.params.id));

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "Title and description are required" });
  }

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    title,
    description,
    completed: completed ?? tasks[taskIndex].completed,
  };

  writeTasks(tasks);
  res.json(tasks[taskIndex]);
});

router.delete("/:id", (req, res) => {
  let tasks = readTasks();
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(req.params.id));

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  const deletedTask = tasks.splice(taskIndex, 1);
  writeTasks(tasks);

  res.json(deletedTask[0]);
});

module.exports = router;
