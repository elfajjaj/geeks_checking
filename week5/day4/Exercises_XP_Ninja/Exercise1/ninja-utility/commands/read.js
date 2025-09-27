const fs = require("fs");

function readFile(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("❌ Error reading file:", err.message);
      return;
    }
    console.log("📖 File Content:\n", data);
  });
}

module.exports = readFile;
