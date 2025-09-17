const form = document.getElementById("gif-form");
const categoryInput = document.getElementById("category");
const gifContainer = document.getElementById("gif-container");
const deleteAllBtn = document.getElementById("delete-all");

const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

const fetchGif = async (category) => {
  try {
    const url = `https://api.giphy.com/v1/gifs/random?tag=${category}&api_key=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("👉 Full Response Object:", data);

    const gifUrl = data.data.images.original.url;

    const gifBox = document.createElement("div");
    gifBox.classList.add("gif-box");

    const img = document.createElement("img");
    img.src = gifUrl;

    const delBtn = document.createElement("button");
    delBtn.textContent = "DELETE";
    delBtn.onclick = () => gifBox.remove();

    gifBox.appendChild(img);
    gifBox.appendChild(delBtn);
    gifContainer.appendChild(gifBox);
  } catch (err) {
    console.error("❌ Error fetching Giphy API:", err);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const category = categoryInput.value.trim();
  if (category) {
    fetchGif(category);
    categoryInput.value = "";
  }
});

deleteAllBtn.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});
