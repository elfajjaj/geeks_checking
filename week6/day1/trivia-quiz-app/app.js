const express = require("express");
const app = express();

app.use(express.json());

// استيراد quiz routes
const quizRoutes = require("./routes/quiz");
app.use("/quiz", quizRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Trivia Quiz running at http://localhost:${PORT}`);
});
