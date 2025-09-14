// 🌟 Exercise 3 : JSON Mario

const marioGame = {
  detail: "An amazing game!",
  characters: {
    mario: {
      description: "Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser: {
      description: "Big and green, Hates princesses.",
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach: {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2,
    },
  },
};

// 1
let jsonMario = JSON.stringify(marioGame);
console.log(jsonMario);
// nested objects htta homma kayb9aw mnadmin bnafs tari9a 


// 2
let jsonMarioPretty = JSON.stringify(marioGame, null, 2);
console.log(jsonMarioPretty);
