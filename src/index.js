function showWeather(response) {
  let temperatureValueElement = document.querySelector("#temperature-value");
  let h1 = document.querySelector("#city");
  let cityInputElement = document.querySelector("#city-input");
  let city = cityInputElement.value;
  city = response.data.city;
  let weatherDescription = document.querySelector("#weather-description");
  let weatherHumidityElement = document.querySelector("#weather-humidity");
  let weatherWindElement = document.querySelector("#weather-wind");
  let weatherTimeElement = document.querySelector("#weather-time");
  let date = new Date(response.data.time * 1000);
  let temperatureIconElement = document.querySelector("#temperature-icon");

  let temperature = Math.round(response.data.temperature.current);
  let weatherHumidity = `${response.data.temperature.humidity}%`;
  let weatherWind = `${response.data.wind.speed}Km/h`;

  temperatureIconElement.innerHTML = `<img
      src="${response.data.condition.icon_url}"
      class="temperature-icon"
    />`;
  weatherTimeElement.innerHTML = formateDate(date);
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

function formateDate(date) {
  let day = date.getDay();
  let minute = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  day = days[date.getDay()];
  console.log(day);

  if (minute < 10) {
    minute = `0${minute}`;
  }
  let time = `${hours}:${minute}`;
  console.log(time);

  return `${day} ${time}`;
}

function getCity(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  let city = cityInputElement.value;

  searchCity(city);
}

let container = document.querySelector("#weather-app-container");
container.addEventListener("submit", getCity);

searchCity("sydney");
