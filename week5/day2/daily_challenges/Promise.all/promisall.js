const form = document.getElementById("sunrise-form");
const resultDiv = document.getElementById("result");

// Function to fetch sunrise data
const fetchSunrise = async (lat, lng) => {
  const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.results.sunrise; // return only the sunrise time
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get values from inputs
  const lat1 = document.getElementById("lat1").value;
  const lng1 = document.getElementById("lng1").value;
  const lat2 = document.getElementById("lat2").value;
  const lng2 = document.getElementById("lng2").value;

  try {
    // Run both API calls in parallel
    const [sunrise1, sunrise2] = await Promise.all([
      fetchSunrise(lat1, lng1),
      fetchSunrise(lat2, lng2),
    ]);

    // Convert to readable local time
    const sunriseCity1 = new Date(sunrise1).toLocaleTimeString("en-US", {
      timeZone: "Europe/Paris",
    });
    const sunriseCity2 = new Date(sunrise2).toLocaleTimeString("en-US", {
      timeZone: "America/New_York",
    });

    resultDiv.innerHTML = `
      🌍 City 1 Sunrise: ${sunriseCity1} <br>
      🌍 City 2 Sunrise: ${sunriseCity2}
    `;
  } catch (error) {
    console.error("❌ Error fetching sunrise data:", error);
    resultDiv.textContent = "Something went wrong fetching sunrise data.";
  }
});
