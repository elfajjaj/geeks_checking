const knex = require("knex");
const path = require("path");

const db = knex({
  client: "sqlite3",
  connection: {
    filename: path.join(__dirname, "../data/quiz.db"),
  },
  useNullAsDefault: true,
});

(async () => {
  const hasQuestions = await db.schema.hasTable("questions");
  if (!hasQuestions) {
    await db.schema.createTable("questions", (table) => {
      table.increments("id").primary();
      table.string("question").notNullable();
      table.string("correctAnswer").notNullable();
    });
    console.log("✅ Table 'questions' created");
  }

  const hasOptions = await db.schema.hasTable("options");
  if (!hasOptions) {
    await db.schema.createTable("options", (table) => {
      table.increments("id").primary();
      table.string("option").notNullable();
    });
    console.log("✅ Table 'options' created");
  }

  const hasJoin = await db.schema.hasTable("questions_options");
  if (!hasJoin) {
    await db.schema.createTable("questions_options", (table) => {
      table.integer("question_id").references("id").inTable("questions");
      table.integer("option_id").references("id").inTable("options");
    });
    console.log("✅ Table 'questions_options' created");
  }

  await db("questions").insert([
    { question: "What is the capital of France?", correctAnswer: "Paris" },
    { question: "What is 2 + 2?", correctAnswer: "4" },
  ]);

  await db("options").insert([
    { option: "Paris" },
    { option: "London" },
    { option: "Rome" },
    { option: "4" },
    { option: "5" },
    { option: "6" },
  ]);

  await db("questions_options").insert([
    { question_id: 1, option_id: 1 },
    { question_id: 1, option_id: 2 },
    { question_id: 1, option_id: 3 },
    { question_id: 2, option_id: 4 },
    { question_id: 2, option_id: 5 },
    { question_id: 2, option_id: 6 },
  ]);

})();



module.exports = db;
