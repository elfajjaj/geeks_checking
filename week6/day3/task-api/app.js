const express = require("express");
const taskRoutes = require("./routes/tasks");

const app = express();
const PORT = 3000;

app.use(express.json()); 
app.use("/tasks", taskRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
