// Exercise 1 : Checking the BMI

// 1 and 2:
const person1 = {
  fullName: "FatimaEzzahra",
  mass: 65, 
  height: 1.70, 
  calcBMI: function() {
    return this.mass / (this.height * this.height);
  }
};

const person2 = {
  fullName: "Soukaina",
  mass: 80,
  height: 1.75,
  calcBMI: function() {
    return this.mass / (this.height * this.height);
  }
};

// 3:
function compareBMI(p1, p2) {
  const bmi1 = p1.calcBMI();
  const bmi2 = p2.calcBMI();

  if (bmi1 > bmi2) {
    console.log(p1.fullName + " has the larger BMI: " + bmi1.toFixed(2));
  } else if (bmi2 > bmi1) {
    console.log(p2.fullName + " has the larger BMI: " + bmi2.toFixed(2));
  } else {
    console.log("Both have the same BMI: " + bmi1.toFixed(2));
  }
}

// 4:
compareBMI(person1, person2);


// Exercise 2 : Grade Average

// 1:

function findAvg(gradesList) {
  let sum = 0;

  for (let i = 0; i < gradesList.length; i++) {
    sum += gradesList[i];
  }

// 2 and 3:

let average = sum / gradesList.length;
  console.log("Average:", average);

  if (average >= 65) {
    console.log("You passed!");
  } else {
    console.log("You failed, you must repeat the course.");
  }
}

findAvg([70, 80, 90]); 
findAvg([40, 50, 60]); 

// Bonus

function calculateAverage(gradesList) {
  let sum = 0;
  for (let i = 0; i < gradesList.length; i++) {
    sum += gradesList[i];
  }
  return sum / gradesList.length;
}

function findAvg(gradesList) {
  let average = calculateAverage(gradesList);
  console.log("Average:", average);

  if (average >= 65) {
    console.log("You passed!");
  } else {
    console.log("You failed, you must repeat the course.");
  }
}

findAvg([70, 80, 90]); 
findAvg([40, 50, 60]); 
