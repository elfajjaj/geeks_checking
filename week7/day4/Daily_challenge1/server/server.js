const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello From Express" });
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send({
    message: `I received your POST request. This is what you sent me: ${req.body.post}`,
  });
});

app.listen(5000, () => console.log("✅ Server listening on port 5000"));
