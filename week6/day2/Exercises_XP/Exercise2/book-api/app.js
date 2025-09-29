const express = require("express");
const app = express();

app.use(express.json());


const bookRoutes = require("./server/routes/bookRoutes");
app.use("/api/books", bookRoutes);


app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
