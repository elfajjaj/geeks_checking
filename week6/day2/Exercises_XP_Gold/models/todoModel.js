const db = require("../config/db");

const Todo = {
  getAll: () => db("tasks").select("*"),

  getById: (id) => db("tasks").where({ id }).first(),

  create: (title) => db("tasks").insert({ title }),

  update: (id, updates) => db("tasks").where({ id }).update(updates),

  delete: (id) => db("tasks").where({ id }).del(),
};

module.exports = Todo;
