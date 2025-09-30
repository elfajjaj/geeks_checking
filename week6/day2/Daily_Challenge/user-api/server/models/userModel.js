const db = require("../config/db");

const User = {
  create: async (userData, hashedPassword) => {
    return db.transaction(async (trx) => {
      const [user] = await trx("users").insert(userData).returning("*");
      await trx("hashpwd").insert({
        username: user.username,
        password: hashedPassword,
      });
      return user;
    });
  },

  getAll: () => db("users").select("*"),

  getById: (id) => db("users").where({ id }).first(),

  getHashByUsername: (username) => db("hashpwd").where({ username }).first(),

  update: (id, data) => db("users").where({ id }).update(data).returning("*"),
};

module.exports = User;
