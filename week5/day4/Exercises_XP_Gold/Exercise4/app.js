const prompt = require("prompt-sync")();
const { users, addUser } = require("./users");

addUser();

const name = prompt("your name: ");
const street = prompt("your street: ");
const country = prompt("your country: ");

users.push({ name, street, country });

console.log(users);
