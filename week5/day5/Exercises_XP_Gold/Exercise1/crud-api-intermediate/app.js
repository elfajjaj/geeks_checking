import express from "express";
import axios from "axios";

const app = express();
const PORT = 5000;

app.use(express.json());

const API_URL = "https://jsonplaceholder.typicode.com/posts";


// 1. Read All Posts
app.get("/api/posts", async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching posts", error: error.message });
  }
});

// 2. Read Single Post
app.get("/api/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching post", error: error.message });
  }
});

// 3. Create Post
app.post("/api/posts", async (req, res) => {
  try {
    const response = await axios.post(API_URL, req.body);
    res.status(201).json({
      message: "✅ Post created successfully",
      data: response.data,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating post", error: error.message });
  }
});

// 4. Update Post
app.put("/api/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.put(`${API_URL}/${id}`, req.body);
    res.json({
      message: "✅ Post updated successfully",
      data: response.data,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating post", error: error.message });
  }
});

// 5. Delete Post
app.delete("/api/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await axios.delete(`${API_URL}/${id}`);
    res.json({ message: `🗑️ Post with id ${id} deleted successfully` });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting post", error: error.message });
  }
});


app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
