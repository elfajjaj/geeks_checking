// Exercice 1:

let numbers = [123, 8409, 100053, 333333333, 7];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] % 3 === 0);
}

// Exercise 2 : Attendance

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}


// 1
let studentName = prompt("please enter your name : ")

// 2
studentName = studentName.toLowerCase();

if (studentName in guestList){
    console.log(`Hi! I'm ${studentName}, and I'm from ${guestList[studentName]}.`); 
}else{
    console.log("Hi! I'm a guest.");        
}


// Exercise 3:

let age = [20, 5, 12, 43, 98, 55];

// 1
let sum = 0;
for (let i = 0 ; i < age.length ; i++){
    sum = sum + age[i]
}
console.log("sum of ages : ",sum);

// 2
let max = age[0];
for (let i = 1 ;i< age.length ; i++){
    if (age[i] > max){
        max = age[i]
    }
}
console.log("Highest age:", max);
