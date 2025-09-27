const fs = require("fs");
const path = require("path");

function getFileInfo() {

    const filePath = path.join(__dirname, "data", "example.txt");

  const exists = fs.existsSync(filePath);

  if (!exists) {
    console.log("❌ File does not exist!");
    return;
  }

  const stats = fs.statSync(filePath);

  console.log("✅ File exists!");
  console.log("📂 Path:", filePath);
  console.log("📏 Size:", stats.size, "bytes");
  console.log("⏰ Created:", stats.birthtime);
}

module.exports = getFileInfo;