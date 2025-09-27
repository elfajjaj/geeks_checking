const fs = require("fs");

function readFile(fileName) {
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      console.error("❌ Error reading file:", err);
      return;
    }
    console.log(`📖 Content of ${fileName}: \n`, data);
  });
}

function writeFile(fileName, content) {
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.error("❌ Error writing file:", err);
      return;
    }
    console.log(`✅ Successfully wrote to ${fileName}`);
  });
}

module.exports = { readFile, writeFile };
