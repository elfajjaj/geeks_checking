// Exercice 1

function displayNumbersDivisible() {
  let sum = 0;
  for (let i = 0; i <= 500; i++) {
    if (i % 23 === 0) {
      console.log(i);
      sum += i;
    }
  }
  console.log("the sum is : " + sum);
}
displayNumbersDivisible();

function displayNumbersDivisible(divisor) {
  let sum = 0;
  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      console.log(i);
      sum += i;
    }
  }
  console.log(
    "all the numbers divisible by " + divisor + ", and their sum" + sum
  );
}
displayNumbersDivisible(23);
displayNumbersDivisible(3);
displayNumbersDivisible(45);

// Exercice 2

// 1

const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
}; 

// 2
shoppingList =  ["banana", "orange","apple"]

// 3

function myBill(){
    let total = 0;
    for (let i = 0;i < shoppingList.length;i++){
        let item = shoppingList[i];
        if (item in stock && stock[item] > 0){
            total += prices[item];
            stock[item]--; 
        }
    }
    console.log(total);
    return total;
}
myBill();
console.log(stock);

// Exercise 3:

// 1

function changeEnough(itemPrice, amountOfChange){

  let quarters = amountOfChange[0] *0.25
  let dimes = amountOfChange[1] *0.10
  let nickels = amountOfChange[2] *0.05
  let pennies = amountOfChange[3] *0.01

  let sumChanges = quarters + dimes + nickels + pennies;
  console.log("sum changes : " + sumChanges);
  console.log("item price : " + itemPrice);

  if (sumChanges >= itemPrice){
     return true;
  }else{
     return false;
  }
}
console.log(changeEnough(4.25, [25, 20, 5, 0]))
console.log(changeEnough(14.11, [2,100,0,0]))

// Exercise 4:

function hotelCost() {
  let nights;
  do {
    nights = prompt("How many nights would you like to stay?");
  } while (isNaN(nights) || nights === "" || nights === null);

  return Number(nights) * 140;
}

function planeRideCost() {
  let destination;
  do {
    destination = prompt("What is your destination?");
  } while (!isNaN(destination) || destination === "" || destination === null);

  destination = destination.toLowerCase();
  if (destination === "london") return 183;
  if (destination === "paris") return 220;
  return 300;
}

function rentalCarCost() {
  let days;
  do {
    days = prompt("How many days would you like to rent the car?");
  } while (isNaN(days) || days === "" || days === null);

  days = Number(days);
  let cost = days * 40;
  if (days > 10) {
    cost *= 0.95; 
  }
  return cost;
}

function totalVacationCost() {
  let hotel = hotelCost();
  let plane = planeRideCost();
  let car = rentalCarCost();

  console.log(
    `The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}`
  );
  console.log(`Total vacation cost: $${hotel + plane + car}`);
}

totalVacationCost();

// Exercise 5:

// 1. Retrieve the div and console.log it
const containerDiv = document.getElementById("container");
console.log(containerDiv);

// 2. Change the name “Pete” to “Richard”
document.querySelectorAll("ul.list")[0].children[1].innerText = "Richard";

// 3. Delete the second <li> of the second <ul>
document.querySelectorAll("ul.list")[1].children[1].remove(); // removes "Sarah"

// 4. Change the first <li> of each <ul> to your name
document.querySelectorAll("ul.list").forEach(ul => {
  ul.children[0].innerText = "Fatima Ezzahra";
});

// --- CSS/Classes Manipulations ---

// 5. Add a class called student_list to both <ul>'s
document.querySelectorAll("ul.list").forEach(ul => {
  ul.classList.add("student_list");
});

// 6. Add the classes university and attendance to the first <ul>
document.querySelectorAll("ul.list")[0].classList.add("university", "attendance");

// --- Styling manipulations ---

// 7. Add light blue background and padding to <div>
containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "10px";

// 8. Hide the <li> that contains “Dan”
let allLis = document.querySelectorAll("li");
allLis.forEach(li => {
  if (li.innerText === "Dan") {
    li.style.display = "none";
  }
});

// 9. Add border to the <li> that contains “Richard”
allLis.forEach(li => {
  if (li.innerText === "Richard") {
    li.style.border = "2px solid black";
  }
});

// 10. Change the font size of the whole body
document.body.style.fontSize = "20px";

// --- Bonus ---
if (containerDiv.style.backgroundColor === "lightblue") {
  let users = Array.from(document.querySelectorAll("ul.list li"))
                   .map(li => li.innerText);
  alert("Hello " + users[0] + " and " + users[1]);
}


// Exercise 6/

// 1. Change the id attribute of the div from navBar to socialNetworkNavigation
const navBarDiv = document.getElementById("navBar");
navBarDiv.setAttribute("id", "socialNetworkNavigation");

// 2. Add a new <li> with text "Logout"
const ul = document.querySelector("ul");
const newLi = document.createElement("li"); // create <li>
const newText = document.createTextNode("Logout"); // create text
newLi.appendChild(newText); // put text inside <li>
ul.appendChild(newLi); // add <li> inside <ul>

// 3. Retrieve first and last <li> elements
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log("First link text:", firstLi.textContent);
console.log("Last link text:", lastLi.textContent);


// Exercise 7:

// 1. Array of books
const allBooks = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    alreadyRead: true
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://covers.openlibrary.org/b/id/8226191-L.jpg",
    alreadyRead: false
  }
];

// 2. Get the section
const section = document.querySelector(".listBooks");

// 3. Render each book
allBooks.forEach(book => {
  // create div for book
  const bookDiv = document.createElement("div");
  bookDiv.style.marginBottom = "15px";

  // title + author
  const details = document.createElement("p");
  details.textContent = `${book.title} written by ${book.author}`;

  // if already read => red
  if (book.alreadyRead) {
    details.style.color = "red";
  }

  // image
  const img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px";

  // append
  bookDiv.appendChild(details);
  bookDiv.appendChild(img);
  section.appendChild(bookDiv);
});
