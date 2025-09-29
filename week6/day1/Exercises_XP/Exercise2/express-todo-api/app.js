const express = require("express");
const app = express();

app.use(express.json());
const PORT = 3000;

const todoRoutes = require("./routes/todos");
app.use("/todos", todoRoutes);  // Mount the Router

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
