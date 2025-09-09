// Exercise 1 : Merge Words

// 1,2

function mergeWords(string) {
  return function (nextString) {
    if (nextString === undefined) {
      return string;
    } else {
      return mergeWords(string + " " + nextString);
    }
  };
}

// 3
const mergeWords = (string) => (nextString) =>
  nextString === undefined ? string : mergeWords(string + " " + nextString);

console.log(mergeWords("Hello")()); 
// "Hello"

console.log(mergeWords("There")("is")("no")("spoon.")()); 
// "There is no spoon."

