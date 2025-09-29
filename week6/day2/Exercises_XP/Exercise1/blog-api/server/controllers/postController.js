const Post = require("../models/postModel");


const getPosts = async (req, res) => {
  try {
    const posts = await Post.getAllPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};


const getPost = async (req, res) => {
  try {
    const post = await Post.getPostById(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};


const createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPost = await Post.createPost(title, content);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};


const updatePost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const updatedPost = await Post.updatePost(req.params.id, title, content);
    if (!updatedPost) return res.status(404).json({ error: "Post not found" });
    res.json(updatedPost);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};


const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.deletePost(req.params.id);
    if (!deletedPost) return res.status(404).json({ error: "Post not found" });
    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getPosts, getPost, createPost, updatePost, deletePost };
