let send = document.getElementById("send");
let weatherData = document.getElementsByClassName("weatherData");
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
  //   console.log(lat);
  //   console.log(lon);
  url
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //   console.log(data.list[0].main.temp_max);
      //   console.log(data.list[0].main.temp_min);
      //   console.log(data.list[0].main.presure);
      //   console.log(data.list[0].main.humidity);
      //   console.log(data.list[0].wind.speed);
      //   console.log(data.list[0].weather.main);
      //   console.log(data.list[0].weather.description);
      //   console.log(data.list[0].weather.icon);
    });
}
