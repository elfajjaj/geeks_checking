// 🌟 Exercise 1 : Scope

// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

funcOne()

// #1.1 - run the code in the console
// inside the funcOne function 3

// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// (TypeError: Assignment to constant variable)
  
///////////////////////////////////////////////////////////////////////////////////

// #2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

funcThree()  
// inside the funcThree function 0
funcTwo()

funcThree()
// inside the funcThree function 5

// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// TypeError: Assignment to constant variable

///////////////////////////////////////////////////////////////////////////////////

// #3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

funcFour()
funcFive()
// #3.1 - run the code in the console
// inside the funcFive function hello

///////////////////////////////////////////////////////////////////////////////////

// #4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


funcSix()
// #4.1 - run the code in the console
// inside the funcSix function test

// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// the same output Because const makes the variable local and it is not affected by the one outside.

//////////////////////////////////////////////////////////////////////////////////

// #5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// in the if block 5
// outside of the if block 2

// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// the same output Because const makes the variable local and it is not affected by the one outside.

///////////////////////////////////////////////////////////////////////////

// 🌟 Exercise 2 : Ternary operator


const winBattle = () => true;
let experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);


// 🌟 Exercise 3 : Is it a string ?

const isString = (value) => typeof value === 'string';

console.log(isString('hello')); 
console.log(isString([1, 2, 4, 0]));

// 🌟 Exercise 4 : Find the sum

let sum = (a,b) => a + b;
console.log(sum(5,4));

// 🌟 Exercise 5 : Kg and grams

// 1. Function Declaration

function kiltogram(kl){
    return kl * 1000;
}
console.log(kiltogram(5));

// 2. Function Expression

const kiltogram = function(kl){
     return kl * 1000;
}
console.log(kiltogram(5));

// 3. Function declaration is hoisted (you can call it before it's defined), function expression is not.

// 4. One-line Arrow Function

const kiltogram = (kl) => kl * 1000;
console.log(kiltogram(5));

// 🌟 Exercise 6 : Fortune teller

(function(numchild , partner , location , job){
    const sentence = `You will be a ${job} in ${location}, and married to ${partner} with ${numchild} kids.`;  
    document.getElementById("message").textContent = sentence;
})(5 , "john" , "Newyork" , "barber")


// 🌟 Exercise 7 : Welcome

(function (userName) {
  const navbarUser = document.getElementById("navbar-user");

  const userDiv = document.createElement("div");
  userDiv.classList.add("user-info");

  const userIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  userIcon.setAttribute("viewBox", "0 0 24 24");
  userIcon.innerHTML = `
    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8V22h19.2v-2.8c0-3.2-6.4-4.8-9.6-4.8z"/>
  `;

  const userText = document.createElement("span");
  userText.textContent = userName;

  userDiv.appendChild(userIcon);
  userDiv.appendChild(userText);
  navbarUser.appendChild(userDiv);
})("John");



// 🌟 Exercise 8 : Juice Bar

// Part1

 function makeJuice(size) {
   function addIngredients(ing1, ing2, ing3) {
     const sentence = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}.`;
     document.getElementById("output").textContent = sentence;
   }

   // Invoke inner function once
   addIngredients("apple", "banana", "orange");
 }

 // Invoke outer function in global scope
 makeJuice("large");

//  Part2

function makeJuice(size) {
  let ingredients = [];

  function addIngredients(ing1, ing2, ing3) {
    ingredients.push(ing1, ing2, ing3);
  }

  function displayJuice() {
    const sentence = `The client wants a ${size} juice, containing ${ingredients.join(
      ", "
    )}.`;
    document.getElementById("output").textContent = sentence;
  }

  // Client wants 6 ingredients = call addIngredients twice
  addIngredients("apple", "banana", "orange");
  addIngredients("mango", "kiwi", "pineapple");

  // Finally display
  displayJuice();
}

// Invoke outer function in global scope
makeJuice("medium");