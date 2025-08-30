// Exercise 1 : List of people

// Part I - Review about arrays

const people = ["Greg", "Mary", "Devon", "James"];
console.log(people);

// // 1.
people.shift();
console.log(people);

// // 2.
people[people.indexOf("James")] = "Jason";
console.log(people);

// // 3.
people.push('Fatima Ezzahra');
console.log(people);

// 4.
console.log(people.indexOf("Mary"));

// 5.
console.log(people.slice(1,3))

// 6.
console.log(people.indexOf("Foo"));
// because it doesn't exist in array

// 7.
let last = people[people.length - 1];
console.log(last);


// Part II

// 1.
for (let i = 0 ; i < people.length ; i++){
    console.log(people[i]);    
}

// 2.
for (let i = 0; i < people.length; i++) {

  console.log(people[i]);
  if (people[i] === 'Devon') {
    break; 
  }
}


// 🌟 Exercise 2 : Your favorite colors

let color = ["brown" , "white" , "orange" , "pink" , "blue"]
let suffix = ["st", "nd", "rd", "th", "th"];

// 1
for (let c = 0 ; c < color.length ; c++){
    console.log(`My #${c + 1} choice is ${color[c]}`);
}

// 2
for (let c = 0 ; c < color.length ; c++){
    console.log(`My ${c + 1} ${suffix[c]} choice is ${color[c]}`);
}


// 🌟 Exercise 3 

// 1 and 2

let num = Number(prompt("Please enter a number:"));

while (num < 10) {
  num = Number(prompt("The number is too small, please enter a new number:"));
}
console.log("You entered " + num + " which is >= 10. Good!");



// 🌟 Exercise 4 : Building Management

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// 2
console.log("number of floors : ", building.numberOfFloors);

// 3
console.log("number of apartments are on the floor 1 : " , building.numberOfAptByFloor.firstFloor);
console.log("number of apartments are on the floor 3 : " , building.numberOfAptByFloor.thirdFloor);

// 4
console.log(`${building.nameOfTenants[1]} has in his apartment ${building.numberOfRoomsAndRent.dan[0]} rooms`);

// // 5
let reSarah = building.numberOfRoomsAndRent.sarah[1]
let reDavid = building.numberOfRoomsAndRent.david[1]
let reDan = building.numberOfRoomsAndRent.dan[1]

if (reSarah + reDavid > reDan){
     reDan = 1200;
}

console.log("Dan's rent after check:", reDan);



// 🌟 Exercise 5 :

// 1
const family = {
  father: "Hassan",
  mother: "Aicha",
  brother: "Abdeljalil",
  sister: "Soukaina"
};

// // 2
console.log("the keys of the object : ");
for (let i in family){
    console.log(i);
}

// // 3
console.log("the values of the object : ");
for (let i in family) {
    console.log(family[i]);
}

// 🌟 Exercise 6 :

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
let sentence = "";

for (let key in details){
    sentence += (` ${key} ${details[key]}`);

}
console.log(sentence.trim());


// 🌟 Exercise 7 :

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// 1
let soc_name = []
for (let n = 0 ; n < 6 ; n++){
    soc_name.push(names[n][0]);
}
console.log(soc_name);

// 2
soc_name.sort()
console.log(soc_name.join(""));









