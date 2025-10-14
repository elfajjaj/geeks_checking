const express = require("express");
const router = express.Router();
const { getQuestions, submitAnswer } = require("../controllers/quizController");

router.get("/questions", getQuestions);
router.post("/answer", submitAnswer);

module.exports = router;
