const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const saltRounds = 10;

exports.register = async (req, res) => {
  try {
    const { email, username, first_name, last_name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await User.create(
      { email, username, first_name, last_name },
      hashedPassword
    );
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to register user" });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashRecord = await User.getHashByUsername(username);

    if (!hashRecord)
      return res.status(400).json({ error: "Invalid username or password" });

    const match = await bcrypt.compare(password, hashRecord.password);
    if (!match)
      return res.status(400).json({ error: "Invalid username or password" });

    res.json({ message: "Login successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Login failed" });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.getAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.getById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const [updatedUser] = await User.update(req.params.id, req.body);
    if (!updatedUser) return res.status(404).json({ error: "User not found" });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: "Failed to update user" });
  }
};
