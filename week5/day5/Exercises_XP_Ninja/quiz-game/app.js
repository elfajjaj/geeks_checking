import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

let questions = [
  {
    question: "What does Node.js run on?",
    options: ["Browser", "V8 Engine", "Operating System", "Database"],
    correct: 1,
  },
  {
    question: "Which module is used to create a server in Node.js?",
    options: ["http", "fs", "path", "os"],
    correct: 0,
  },
  {
    question: "Which keyword declares a constant in JavaScript?",
    options: ["let", "var", "const", "static"],
    correct: 2,
  },
];

app.get("/api/questions", (req, res) => {
  res.json(questions);
});

app.listen(PORT, () => {
  console.log(`🚀 Quiz Game running on http://localhost:${PORT}`);
});
