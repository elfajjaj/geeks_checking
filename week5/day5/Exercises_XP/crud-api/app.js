import express from "express";
import cors from "cors";
import {fetchPosts} from "./data/dataService.js";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

// 🟢 Endpoint: Get all posts from JSONPlaceholder
app.get("/api/posts", async (req, res) => {

  try {

    const posts = await fetchPosts();
    console.log("✅ Data fetched from JSONPlaceholder");
    res.status(200).json(posts);

  } catch (error) {
    console.error("❌ Error fetching posts:", error.message);
    res.status(500).json({ message: "Failed to fetch posts" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

