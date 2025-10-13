const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.json([
    { id: 1, username: "somebody" },
    { id: 2, username: "somebody_else" },
  ]);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
