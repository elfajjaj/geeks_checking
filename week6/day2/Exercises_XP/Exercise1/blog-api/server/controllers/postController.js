const Post = require("../models/postModel");

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.getAll();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.getById(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch post" });
  }
};

exports.createPost = async (req, res) => {
  try {
    const [newPost] = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: "Failed to create post" });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const [updatedPost] = await Post.update(req.params.id, req.body);
    if (!updatedPost) return res.status(404).json({ error: "Post not found" });
    res.json(updatedPost);
  } catch (err) {
    res.status(500).json({ error: "Failed to update post" });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const deleted = await Post.delete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Post not found" });
    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete post" });
  }
};
