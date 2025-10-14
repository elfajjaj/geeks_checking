const Quiz = require("../models/quizModel");

const getQuestions = async (req, res) => {
  try {
    const questions = await Quiz.getAllQuestions();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: "Error fetching quiz data" });
  }
};

const submitAnswer = async (req, res) => {
  const { id, answer } = req.body;

  if (!id || !answer) {
    return res.status(400).json({ error: "Missing data" });
  }

  const correct = await Quiz.checkAnswer(id, answer);
  res.json({
    correct,
    message: correct ? "✅ Correct!" : "❌ Wrong answer!",
  });
};

module.exports = { getQuestions, submitAnswer };
