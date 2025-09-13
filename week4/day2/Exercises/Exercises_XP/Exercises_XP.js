// 🌟 Exercise 1 : Colors

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// 1
let info = colors.forEach((value,index) => {
    console.log(`${index + 1}# choice is ${value}`);
})

// 2
if (colors.some((color) => color === "Violet")) {
  console.log("Yeah");
} else {
  console.log("No...");
}

// 🌟 Exercise 2 : Colors #2

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
  let pos = index + 1;

  let suffix =
    pos === 1
      ? ordinal[1]
      : pos === 2
      ? ordinal[2]
      : pos === 3
      ? ordinal[3]
      : ordinal[0];

  console.log(`${pos}${suffix} choice is ${color}.`);
});

// Exercise 3 : Analyzing

// 1
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ["bread", ...vegetables, "chicken", ...fruits];
console.log(result);
// output
["bread", "carrot", "potato", "chicken", "apple", "orange"];


// 2
const country = "USA";
console.log([...country]);
// output
["U", "S", "A"];


// bonus
let newArray = [...[, ,]];
console.log(newArray);

// output
[undefined, undefined];

// 🌟 Exercise 4 : Employees
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// 1
const welcomeStudents = users.map((user) => `Hello ${user.firstName}`);
console.log(welcomeStudents);

// 2
const fullStackResidents = users.filter((user) => user.role === "Full Stack Resident");
console.log(fullStackResidents);

// 3
const lastNamesResidents = users.filter((user) => user.role === "Full Stack Resident").map((user) => user.lastName);
console.log(lastNamesResidents);


// 🌟 Exercise 5 : Star Wars

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const sentence = epic.reduce((acc , val) => `${acc} ${val}`)
console.log(sentence);

// 🌟 Exercise 6 : Employees #2

// 1
const passedStudents = students.filter((student) => student.isPassed);
console.log(passedStudents);

// 2 bonus
students
  .filter((student) => student.isPassed)
  .forEach((student) => {
    console.log(
      `Good job ${student.name}, you passed the course in ${student.course}`
    );
  });
