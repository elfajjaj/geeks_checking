import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { users } from "./users.js";

const app = express();
const PORT = 5000;

app.use(express.json());

const JWT_SECRET = "mySecretKey123";

app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }

  const existingUser = users.find((u) => u.username === username);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = { username, password: hashedPassword };
  users.push(newUser);

  res.status(201).json({ message: "User registered successfully ✅" });
});


app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.status(400).json({ message: "Invalid username or password ❌" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid username or password ❌" });
  }

  const token = jwt.sign({ username: user.username }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ message: "Login successful ✅", token });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; 

  if (!token) return res.status(401).json({ message: "Access denied ❌" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token ❌" });
    req.user = user;
    next();
  });
}

app.get("/api/profile", authenticateToken, (req, res) => {
  res.json({ message: `Welcome ${req.user.username} 🎉`, user: req.user });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
