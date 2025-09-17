// 🌟 Exercise 1 : Giphy API

const url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

const fetchGifs = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("👉 Full Response Object:", data);

    console.log("👉 First GIF URL:", data.data[0].url);

  } catch (err) {
    console.error("❌ Error fetching Giphy API:", err);
  }
};

fetchGifs();


// 🌟 Exercise 2 : Giphy API

const url = "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

const fetchSunGifs = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    console.log("👉 Full Response Object:", data);

    console.log("👉 First GIF URL:", data.data[0].url);

  } catch (error) {
    console.error("❌ Error fetching Giphy API:", error);
  }
};

fetchSunGifs();


// 🌟 Exercise 3 : Async function


const fetchStarship = async () => {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const objectStarWars = await response.json();

    console.log(objectStarWars.result);
  } catch (error) {
    console.error("❌ Error fetching Starship:", error);
  }
};

// Call the function
fetchStarship();


// 🌟 Exercise 4: Analyze

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();

// output

// calling
// resolved   (after 2 seconds)
