const axios = require("axios");
const chalk = require("chalk");

const API_KEY = "2e932b3154d9eb63b00ac6b4b771f329"; 

async function getWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url);

    const data = response.data;
    console.log(chalk.blue.bold(`📍 City: ${data.name}`));
    console.log(chalk.yellow(`🌡️ Temperature: ${data.main.temp}°C`));
    console.log(chalk.green(`☁️ Weather: ${data.weather[0].description}`));
  } catch (err) {
    console.log(chalk.red("❌ Error fetching weather data!"));
  }
}

module.exports = getWeather;
