const express = require("express");
const userRoutes = require("./server/routes/userRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/users", userRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
