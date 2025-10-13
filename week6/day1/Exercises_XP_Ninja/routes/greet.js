const express = require("express");
const router = express.Router();

const emojis = ["😀", "🎉", "🌟", "🎈", "👋"];

router.get("/", (req, res) => {
  let emojiOptions = emojis
    .map((emoji) => `<option value="${emoji}">${emoji}</option>`)
    .join("");

  res.send(`
    <html>
      <head>
        <title>Emoji Greeting</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <div class="container">
          <h1>Emoji Greeting App</h1>
          <form action="/greet" method="POST">
            <label for="name">Enter your name:</label>
            <input type="text" name="name" id="name" required>

            <label for="emoji">Choose an emoji:</label>
            <select name="emoji" id="emoji">
              ${emojiOptions}
            </select>

            <button type="submit">Greet Me!</button>
          </form>
        </div>
      </body>
    </html>
  `);
});


router.post("/greet", (req, res) => {
  const { name, emoji } = req.body;

  if (!name.trim()) {
    return res.send(`
      <h2 style="color:red; text-align:center;">⚠️ Please enter your name!</h2>
      <a href="/">Go Back</a>
    `);
  }

  res.send(`
    <html>
      <head>
        <title>Greeting</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <div class="container">
          <h1>Hello, ${name}! ${emoji}</h1>
          <p>We're happy to see you here!</p>
          <a href="/">Back</a>
        </div>
      </body>
    </html>
  `);
});

module.exports = router;
