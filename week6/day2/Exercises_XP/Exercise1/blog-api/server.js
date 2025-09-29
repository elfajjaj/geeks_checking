const express = require("express");
const app = express();

app.use(express.json());

const postRoutes = require("./server/routes/postRoutes");
app.use("/posts", postRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
