// Daily Challenge : Words in the stars

// 1. 
const input = prompt(
  "Enter words separated by commas (e.g., Hello,World,in,a,frame)"
);

// 2. 
const words = input.split(",").map((word) => word.trim());

// 3. 
const maxLength = Math.max(...words.map((word) => word.length));

// 4. 
const border = "*".repeat(maxLength + 4); 

console.log(border);

// 5. 
words.forEach((word) => {
  const padding = " ".repeat(maxLength - word.length); 
  console.log(`* ${word}${padding} *`);
});

console.log(border);
