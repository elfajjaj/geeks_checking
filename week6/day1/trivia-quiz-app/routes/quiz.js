const express = require("express");
const router = express.Router();

// 🟢 Hard-coded quiz questions
const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

// 🟢 Game state (in-memory, reset with server restart)
let currentQuestionIndex = 0;
let score = 0;

// GET /quiz → Start quiz (first question)
router.get("/", (req, res) => {
  currentQuestionIndex = 0;
  score = 0;
  res.json({
    message: "Welcome to the Trivia Quiz! 🎉",
    question: triviaQuestions[currentQuestionIndex].question,
  });
});

// POST /quiz → Submit answer and go to next
router.post("/", (req, res) => {
  const { answer } = req.body;
  if (!answer) {
    return res.status(400).json({ error: "Answer is required" });
  }

  const currentQuestion = triviaQuestions[currentQuestionIndex];

  let feedback;
  if (answer.trim().toLowerCase() === currentQuestion.answer.toLowerCase()) {
    score++;
    feedback = "✅ Correct!";
  } else {
    feedback = `❌ Wrong! The correct answer was: ${currentQuestion.answer}`;
  }

  currentQuestionIndex++;

  // Check if quiz ended
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.json({
      feedback,
      message: "Quiz finished! 🎯",
      finalScore: score,
      total: triviaQuestions.length,
    });
  }

  // Otherwise show next question
  res.json({
    feedback,
    nextQuestion: triviaQuestions[currentQuestionIndex].question,
  });
});

// GET /quiz/score → Final score
router.get("/score", (req, res) => {
  res.json({
    message: "Your current quiz score",
    score,
    total: triviaQuestions.length,
  });
});

module.exports = router;
