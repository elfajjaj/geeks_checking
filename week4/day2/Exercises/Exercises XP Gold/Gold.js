// Exercise 1 : Analyzing the map method

[1, 2, 3].map((num) => {
  if (typeof num === "number") return num * 2;
  return;
});

// output
[2, 4, 6];

// Exercise 2: Analyzing the reduce method

[[0, 1],[2, 3]].reduce((acc, cur) => acc.concat(cur) , [1, 2]);

[[0, 1],[2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);

// output
[1, 2, 0, 1, 2, 3];

// Exercise 3 : Analyze this code

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  console.log(num, i);
  alert(num);
  return num * 2;
});

// i howwa l'index dyal les elements f arrayNum ya3ni 0,1,2,3,4,5

// Exercise 4 : Nested arrays

// 1
const array = [[1], [2], [3], [[[4]]], [[[5]]]];
console.log(array.flat(2));

// output
[1, 2, 3, [4], [5]];

// 2
const greeting = [
  ["Hello", "young", "grasshopper!"],
  ["you", "are"],
  ["learning", "fast!"],
];
const newGreeting = greeting.map((words) => words.join(" "));
console.log(newGreeting);

// output
["Hello young grasshopper!", "you are", "learning fast!"];

// 3
console.log(newGreeting.join(" "));

// output
"Hello young grasshopper! you are learning fast!";

// 4
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log(trapped.flat(Infinity));

// output
[3];
