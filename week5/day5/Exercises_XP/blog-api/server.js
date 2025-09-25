const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const posts = [
  { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
];

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.get('/posts/:id', (req, res) => {
  const { id } = req.params;
  const post = posts.find(p => p.id === parseInt(id));
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

app.post('/posts', (req, res) => {
  const { id, title, content } = req.body;
  posts.push({ id, title, content });
  res.status(201).json({ message: 'Post created', post: { id, title, content } });
});

app.put('/posts/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const post = posts.find(p => p.id === parseInt(id));
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  post.title = title;
  post.content = content;
  res.json({ message: `Post ${id} updated`, post: { title, content } });
});

app.delete('/posts/:id', (req, res) => {
  const { id } = req.params;
  const postIndex = posts.findIndex(p => p.id === parseInt(id));
  if (postIndex >= 0) {
    posts.splice(postIndex, 1);
    res.json({ message: `Post ${id} deleted` });
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});