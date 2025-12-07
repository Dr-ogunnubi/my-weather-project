function showWeather(response) {
  let temperatureValueElement = document.querySelector("#temperature-value");
  let h1 = document.querySelector("#city");
  let cityInputElement = document.querySelector("#city-input");
  let city = cityInputElement.value;
  city = response.data.city;
  let weatherDescription = document.querySelector("#weather-description");
  let weatherHumidityElement = document.querySelector("#weather-humidity");
  let weatherWindElement = document.querySelector("#weather-wind");

  let temperature = Math.round(response.data.temperature.current);
  let weatherHumidity = `${response.data.temperature.humidity}%`;
  let weatherWind = `${response.data.wind.speed}Km/h`;

  weatherWindElement.innerHTML = weatherWind;
  weatherHumidityElement.innerHTML = weatherHumidity;
  temperatureValueElement.innerHTML = temperature;
  h1.innerHTML = city;
  weatherDescription.innerHTML = response.data.condition.description;
  console.log(response);
  console.log(temperature);
  console.log(city);
  console.log(response.data.condition.description);

  console.log(weatherHumidity);
  console.log(weatherWind);
}

function searchCity(city) {
  let apiKey = "ff69318boa02a4e62f1a9e845ad0e1t9";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(showWeather);
}

let now = new Date();
let day = now.getDay();
let minute = now.getMinutes();
let hours = now.getHours();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
day = days[now.getDay()];
console.log(day);

if (minute < 10) {
  minute = `0${minute}`;
}
let time = `${hours}:${minute}`;
console.log(time);

formatDate = `${day} ${time}`


function getCity(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  let city = cityInputElement.value;

  searchCity(city);
}

let container = document.querySelector("#weather-app-container");
container.addEventListener("submit", getCity);

searchCity("sydney");
