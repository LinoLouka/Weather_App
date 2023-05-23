export function displayCard(data) {
  let date = data.list[0].dt_txt;
  let dateP = document.createElement("p");
  dateP.textContent = date;
  weatherData.appendChild(dateP);

  let weatherCode = data.list[0].weather[0].icon;
  let weatherIcoIMG = document.createElement("img");
  let weatherIco = `https://openweathermap.org/img/wn/${weatherCode}@2x.png`;
  weatherIcoIMG.src = weatherIco;
  weatherData.appendChild(weatherIcoIMG);

  let weather = data.list[0].weather[0].main;
  let weatherP = document.createElement("p");
  weatherP.textContent = weather;
  weatherData.appendChild(weatherP);

  let weatherDes = data.list[0].weather[0].description;
  let weatherDesP = document.createElement("p");
  weatherDesP.textContent = weatherDes;
  weatherData.appendChild(weatherDesP);

  let max = data.list[0].main.temp_max;
  let maxP = document.createElement("p");
  maxP.textContent = max;
  weatherData.appendChild(maxP);

  let min = data.list[0].main.temp_min;
  let minP = document.createElement("p");
  minP.textContent = min;
  weatherData.appendChild(minP);

  let pressure = data.list[0].main.pressure;
  let pressureP = document.createElement("p");
  pressureP.textContent = pressure;
  weatherData.appendChild(pressureP);

  let humidity = data.list[0].main.humidity;
  let humidityP = document.createElement("p");
  humidityP.textContent = humidity;
  weatherData.appendChild(humidityP);

  let speedWind = data.list[0].wind.speed;
  let speedWindP = document.createElement("p");
  speedWindP.textContent = speedWind;
  weatherData.appendChild(speedWindP);
}
