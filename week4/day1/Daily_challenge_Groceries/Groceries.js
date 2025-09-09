let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

// 1) 
const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => console.log(fruit));
};

displayGroceries();

// 2) 
const cloneGroceries = () => {
  let user = client;
  client = "Betty";

  console.log("user:", user);
  console.log("client:", client);

  // ❌ The value of user does not change.
  // Reason: strings (and all primitive values) are passed by value, not by reference.

  let shopping = groceries;

  shopping.totalPrice = "35$";

  console.log("shopping.totalPrice:", shopping.totalPrice);
  console.log("groceries.totalPrice:", groceries.totalPrice);

  // ✅ Both shopping.totalPrice and groceries.totalPrice change.
  // Reason: objects are passed by reference, so both variables point to the same object.

  shopping.other.paid = false;

  console.log("shopping.other.paid:", shopping.other.paid); // => false
  console.log("groceries.other.paid:", groceries.other.paid); // => false

  // ✅ Both shopping.other.paid and groceries.other.paid change.
  // Reason: nested object properties are also shared by reference.
};

// 3)
cloneGroceries();
