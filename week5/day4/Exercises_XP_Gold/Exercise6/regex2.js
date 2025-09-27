const prompt = require("prompt-sync")();

const fullName = prompt("Enter your full name (ex:John Doe): ");

const regex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;

if (regex.test(fullName)) {
  console.log("✅ correct name:", fullName);
} else {
  console.log("❌ incorrect name. It should be like : John Doe");
}
