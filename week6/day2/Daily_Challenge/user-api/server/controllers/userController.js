const bcrypt = require("bcrypt");
const User = require("../models/userModel");

// POST /register
const register = async (req, res) => {
  try {
    const { email, username, password, first_name, last_name } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.createUser(
      { email, username, first_name, last_name },
      hashedPassword
    );

    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /login
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const storedUser = await User.getPasswordByUsername(username);

    if (!storedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, storedUser.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.json({ message: "Login successful ✅" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /users
const getUsers = async (req, res) => {
  const users = await User.getAllUsers();
  res.json(users);
};

// GET /users/:id
const getUser = async (req, res) => {
  const user = await User.getUserById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

// PUT /users/:id
const updateUser = async (req, res) => {
  const user = await User.updateUser(req.params.id, req.body);
  if (!user.length) return res.status(404).json({ message: "User not found" });
  res.json(user[0]);
};

module.exports = { register, login, getUsers, getUser, updateUser };
