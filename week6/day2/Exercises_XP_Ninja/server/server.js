const express = require("express");
const cors = require("cors");
const path = require("path");
const quizRoutes = require("./routes/quizRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use("/api", quizRoutes);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
