const express = require("express");
const postRoutes = require("./server/routes/postRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/posts", postRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Server error" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
