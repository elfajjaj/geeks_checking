const db = require("../config/db");

const Quiz = {
  getAllQuestions: async () => {
    const questions = await db("questions").select("*");

    const result = [];
    for (let q of questions) {
      const options = await db("options")
        .join(
          "questions_options",
          "options.id",
          "=",
          "questions_options.option_id"
        )
        .where("questions_options.question_id", q.id)
        .select("options.option");

      result.push({
        id: q.id,
        question: q.question,
        options: options.map((o) => o.option),
      });
    }
    return result;
  },

  checkAnswer: async (id, answer) => {
    const question = await db("questions").where({ id }).first();
    return question && question.correctAnswer === answer;
  },
};

module.exports = Quiz;
