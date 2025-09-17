// Exercise 1 : Giphy API #2

const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const btn = document.getElementById("get-gif");
const gifContainer = document.getElementById("gif-container");

const fetchGif = async () => {
  try {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("👉 Full Response Object:", data);

    const gifUrl = data.data.images.original.url;

    gifContainer.innerHTML = `<img src="${gifUrl}" alt="Random GIF">`;
  } catch (err) {
    console.error("❌ Error fetching Giphy API:", err);
  }
};

btn.addEventListener("click", fetchGif);


// Exercise 2 : Analyze #2

// output

// ==SEQUENTIAL START==
// starting slow promise
// slow promise is done     (after 2 seconds)
// slow
// starting fast promise
// fast promise is done      (after 1 second)
// fast



// Exercise 3 : Analyze #3

// output

// ==CONCURRENT START with await==
// starting slow promise
// starting fast promise
// fast promise is done      (after 1 seconds)
// slow promise is done       (after 2 seconds)
// slow                       (after 2 seconds)
// fast                       (slow مباشرة من بعد)


// Exercise 4 : Modify fetch with Async/Await

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(async (url) => {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      })
    );

    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch (err) {
    console.log("ooooooops", err);
  }
};

getData();
