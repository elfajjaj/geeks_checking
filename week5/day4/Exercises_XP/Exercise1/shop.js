const products = require("./products.js");

function findProductByName(productName) {
  const product = products.find(
    (p) => p.name.toLowerCase() === productName.toLowerCase()
  );

  if (product) {
    console.log("✅ Product found:", product);
  } else {
    console.log("❌ Product not found!");
  }
}

findProductByName("Laptop");
findProductByName("Book");
findProductByName("Tablet");
