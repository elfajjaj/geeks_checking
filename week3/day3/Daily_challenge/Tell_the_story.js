const form = document.getElementById("libform");
const storySpan = document.getElementById("story");
const shuffleBtn = document.getElementById("shuffle");

// form submit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const noun = document.getElementById("noun").value.trim();
  const adjective = document.getElementById("adjective").value.trim();
  const person = document.getElementById("person").value.trim();
  const verb = document.getElementById("verb").value.trim();
  const place = document.getElementById("place").value.trim();

  if (!noun || !adjective || !person || !verb || !place) {
    alert("Please fill in all fields!");
    return;

  }

  // save values globally
  currentValues = { noun, adjective, person, verb, place };

  // generate story
  storySpan.textContent = generateStory(currentValues);
});

// values stored after first submit
let currentValues = null;

// Different story templates
const stories = [
  (v) =>
    `${v.person} went to ${v.place} with a ${v.adjective} ${v.noun} and started to ${v.verb} all day long!`,
  (v) =>
    `In ${v.place}, ${v.person} found a ${v.noun} that was very ${v.adjective}, then decided to ${v.verb}.`,
  (v) =>
    `Once upon a time, ${v.person} brought a ${v.noun} to ${v.place} and ${v.verb} until everyone laughed at the ${v.adjective} scene.`,
];

// Function to pick random story
function generateStory(values) {
  const index = Math.floor(Math.random() * stories.length);
  return stories[index](values);
}

// Shuffle button event
shuffleBtn.addEventListener("click", () => {
  if (!currentValues) {
    alert("Please fill the form first!");
    return;
  }
  storySpan.textContent = generateStory(currentValues);
});
