function weatherTime() {
  let now = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[now.getDay()];

  let hour = now.getHours();
  let minutes = now.getMinutes();

  let h2 = document.querySelector("h2");
  h2.innerHTML = `${day}, ${hour}:${minutes}`;
}

weatherTime();

function displayCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#inputSearch");

  let city = document.querySelector("#city");
  city.innerHTML = `${cityInput.value}`;

  let apiKey = "b35c686ba9565ba0ab254c2230937552";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);
}

let searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", displayCity);

function showTemp(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = response.data.main.temp;
}
