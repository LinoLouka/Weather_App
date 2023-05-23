import { displayCard } from "./cards.js";

let send = document.getElementById("send");
let weatherData = document.getElementById("weatherData");
const apiKey = "00dde611c283263cbabba55f2e6247f0";

async function weather() {
  let cityname = document.getElementById("search").value;

  let url = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=1&appid=${apiKey}`
  );
  let data = await url.json();
  let lat = data[0].lat;
  let lon = data[0].lon;
  display(lat, lon);
}

send.addEventListener("click", weather);

function display(lat, lon) {
  let url = fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
  );
  url
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayCard(data);
    });
}
