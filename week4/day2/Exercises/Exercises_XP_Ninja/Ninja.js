// Exercise 1 : Dog age to Human years

const data = [
  {
    name: "Butters",
    age: 3,
    type: "dog",
  },
  {
    name: "Cuty",
    age: 5,
    type: "rabbit",
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog",
  },
  {
    name: "Red",
    age: 1,
    type: "cat",
  },
  {
    name: "Joey",
    age: 3,
    type: "dog",
  },
  {
    name: "Rex",
    age: 10,
    type: "dog",
  },
];

// 1

let total = 0;
for (let animal of data) {
  if (animal.type === "dog") {
    total += animal.age * 7;
  }
}
console.log(total); 

// 2
const totalHumanYears = data.reduce((sum, animal) => {
  if (animal.type === "dog") {
    return sum + animal.age * 7;
  }
  return sum;
}, 0);

console.log(totalHumanYears); 

// Exercise 2 : Email

const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';
const cleaned = userEmail3.trim();
console.log(cleaned);


// Exercise 3 : Employees #3

const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

// 1

let userRoles = {};
users.forEach(user => {
  const fullName = `${user.firstName} ${user.lastName}`;
  userRoles[fullName] = user.role;
});

console.log(userRoles);


// Exercise 4 : Array to Object

const letters = ["x", "y", "z", "z"];

// 1

let letterCount = {};
for (let letter of letters) {
  letterCount[letter] = (letterCount[letter] || 0) + 1;
}
console.log(letterCount); 

// 2

const letterCount2 = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});

console.log(letterCount2); 
