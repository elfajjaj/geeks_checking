// ✅ Part 1 : Quote Generator

const quotes = [
  {
    id: 0,
    author: "Einstein",
    quote:
      "Life is like riding a bicycle. To keep your balance you must keep moving.",
    likes: 0,
  },
  {
    id: 1,
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
    likes: 0,
  },
  {
    id: 2,
    author: "Mark Twain",
    quote: "The secret of getting ahead is getting started.",
    likes: 0,
  },
];

let lastId = null; 

const quoteDisplay = document.getElementById("quote-display");
const generateBtn = document.getElementById("generate");

function generateQuote() {
  let randomId;
  do {
    randomId = Math.floor(Math.random() * quotes.length);
  } while (randomId === lastId); 

  lastId = randomId;
  const q = quotes[randomId];
  quoteDisplay.innerHTML = `<p>"${q.quote}"</p><p>- ${q.author}</p>`;
}

generateBtn.addEventListener("click", generateQuote);


// ✅ Part 2 : Add buttons

// Add new quote
const addForm = document.getElementById("add-form");
addForm.addEventListener("submit", e => {
  e.preventDefault();
  const newQuote = document.getElementById("new-quote").value;
  const newAuthor = document.getElementById("new-author").value;
  quotes.push({ id: quotes.length, author: newAuthor, quote: newQuote, likes: 0 });
  addForm.reset();
  alert("Quote added!");
});

// Buttons
document.getElementById("char-space").addEventListener("click", () => {
  const current = quotes[lastId];
  alert(`Characters (with space): ${current.quote.length}`);
});

document.getElementById("char-nospace").addEventListener("click", () => {
  const current = quotes[lastId];
  alert(`Characters (no space): ${current.quote.replace(/\s+/g, '').length}`);
});

document.getElementById("word-count").addEventListener("click", () => {
  const current = quotes[lastId];
  alert(`Words: ${current.quote.split(/\s+/).length}`);
});

document.getElementById("like").addEventListener("click", () => {
  const current = quotes[lastId];
  current.likes++;
  alert(`"${current.quote}" now has ${current.likes} likes ❤️`);
});


// ✅ Part 3 : Filter form (by author)

let filtered = [];
let currentIndex = 0;

document.getElementById("filter-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const author = document.getElementById("filter-author").value;
  filtered = quotes.filter(
    (q) => q.author.toLowerCase() === author.toLowerCase()
  );
  currentIndex = 0;
  if (filtered.length > 0) {
    displayFiltered();
  } else {
    quoteDisplay.innerHTML = "<p>No quotes found for this author.</p>";
  }
});

function displayFiltered() {
  const q = filtered[currentIndex];
  quoteDisplay.innerHTML = `<p>"${q.quote}"</p><p>- ${q.author}</p>`;
}

document.getElementById("prev").addEventListener("click", () => {
  if (filtered.length > 0) {
    currentIndex = (currentIndex - 1 + filtered.length) % filtered.length;
    displayFiltered();
  }
});

document.getElementById("next").addEventListener("click", () => {
  if (filtered.length > 0) {
    currentIndex = (currentIndex + 1) % filtered.length;
    displayFiltered();
  }
});
