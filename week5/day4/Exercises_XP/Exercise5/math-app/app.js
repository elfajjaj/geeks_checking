const _ = require("lodash");
const math = require("./math");

const sum = math.add(5, 10);
const product = math.multiply(4, 6);

console.log("Sum:", sum); 
console.log("Product:", product); 

const numbers = [10, 5, 20, 3];
console.log("Max number:", _.max(numbers)); 

console.log("Chunked array:", _.chunk(numbers, 2));

