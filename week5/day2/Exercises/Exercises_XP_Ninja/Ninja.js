// Exercise 1 : Giphy API #3

const form = document.getElementById("gif-form");
const categoryInput = document.getElementById("category");
const gifContainer = document.getElementById("gif-container");
const deleteAllBtn = document.getElementById("delete-all");

const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Fetch gifs by category
const fetchGifs = async (category) => {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=20&api_key=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("👉 Full Response Object:", data);

    // Loop on gifs
    data.data.forEach((gif) => {
      const gifUrl = gif.images.original.url;

      const gifBox = document.createElement("div");
      gifBox.classList.add("gif-box");

      const img = document.createElement("img");
      img.src = gifUrl;

      gifBox.appendChild(img);
      gifContainer.appendChild(gifBox);
    });
  } catch (err) {
    console.error("❌ Error fetching Giphy API:", err);
  }
};

// Form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const category = categoryInput.value.trim();
  if (category) {
    fetchGifs(category);
    categoryInput.value = "";
  }
});

// Delete all
deleteAllBtn.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});


// Exercise 2 : Analyze #4

// output

// ==CONCURRENT START with Promise.all==
// starting slow promise
// starting fast promise
// fast promise is done
// slow promise is done
// slow
// fast


// Exercise 3 : Analyze #5

// output

// ==PARALLEL with await Promise.all==
// starting slow promise
// starting fast promise
// fast promise is done
// fast
// slow promise is done
// slow

// Exercise 4 : Analyze #6

// ==PARALLEL with Promise.then==
// starting slow promise
// starting fast promise
// fast promise is done
// fast
// slow promise is done
// slow
