// 🌟 Exercise 1 : Location

// output
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// 🌟 Exercise 2: Display Student Info

function displayStudentInfo({ first, last }) {
  return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({ first: "Elie", last: "Schoppik" }));


// 🌟 Exercise 3: User & id

const users = { user1: 18273, user2: 92833, user3: 90315 };

// 1. Object to array
let usersArray = Object.entries(users);
console.log(usersArray);

// 2. Multiply IDs by 2
let updatedUsers = usersArray.map(([user, id]) => [user, id * 2]);
console.log(updatedUsers);


// 🌟 Exercise 4 : Person class

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);

// output
// typeof member = "object"
// hit aya instance mn l classe f JS kat3tabr object

// 🌟 Exercise 5 : Dog class

class Dog {
  constructor(name) {
    this.name = name;
  }
};

// ✅ la reponse: Option 2

class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

// 🌟 Exercise 6 : Challenges

// 1

// [2] === [2] // false (2 arrays makhtalfin f reference)
// {} === {}   // false (2 objects makhtalfin f reference)

// 2
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number) // 4 (3andha nafs reference dyal object1)
console.log(object3.number) // 4 (nafs l reference)
console.log(object4.number) // 5 (object makhtalf)

// 3

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  sound(noise) {
    return `${noise} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

let farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooo"));
