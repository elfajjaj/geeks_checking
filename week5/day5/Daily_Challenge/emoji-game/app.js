import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // serve frontend

// Emojis data
const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "😂", name: "Laugh" },
  { emoji: "🚗", name: "Car" },
  { emoji: "🍕", name: "Pizza" },
  { emoji: "😍", name: "HeartEyes" },
  { emoji: "🤔", name: "Thinking" },
];

let leaderboard = [];
let score = 0;

// Shuffle helper
function shuffle(arr) {
  return arr.slice().sort(() => Math.random() - 0.5);
}

// API: Get new question
app.get("/game", (req, res) => {
  const correctIndex = Math.floor(Math.random() * emojis.length);
  const correct = emojis[correctIndex];
  const options = shuffle([
    correct.name,
    ...shuffle(emojis)
      .slice(0, 3)
      .map((e) => e.name),
  ]).slice(0, 4);

  res.json({
    emoji: correct.emoji,
    correct: correct.name,
    options,
  });
});

// API: Submit guess
app.post("/guess", (req, res) => {
  const { guess, correct } = req.body;

  if (guess === correct) {
    score++;
    res.json({ success: true, message: "✅ Correct!", score });
  } else {
    res.json({ success: false, message: "❌ Wrong!", score });
  }
});

// Leaderboard (basic)
app.get("/leaderboard", (req, res) => {
  leaderboard.push(score);
  leaderboard = leaderboard.sort((a, b) => b - a).slice(0, 5); // top 5
  res.json(leaderboard);
});

app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
