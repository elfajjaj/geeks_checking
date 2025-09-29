const db = require("../config/db");

const createUser = async (userData, hashedPassword) => {
  return await db.transaction(async (trx) => {
    const [user] = await trx("users")
      .insert({
        email: userData.email,
        username: userData.username,
        first_name: userData.first_name,
        last_name: userData.last_name,
      })
      .returning("*");

    await trx("hashpwd").insert({
      username: userData.username,
      password: hashedPassword,
    });

    return user;
  });
};

const getAllUsers = () => db("users").select("*");
const getUserById = (id) => db("users").where({ id }).first();
const updateUser = (id, data) =>
  db("users").where({ id }).update(data).returning("*");
const getPasswordByUsername = (username) =>
  db("hashpwd").where({ username }).first();

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  getPasswordByUsername,
};
