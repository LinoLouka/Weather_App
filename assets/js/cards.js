export function displayCard(data) {
  let weatherDataContainer = document.getElementById("weatherData");
  let weatherCardsWrapper = document.createElement("div");

  for (let i = 0; i < data.list.length; i++) {
    let weatherCardDiv = document.createElement("div");
    weatherCardDiv.classList.add("weather-card");

    let date = data.list[i].dt_txt;
    let dateP = document.createElement("p");
    dateP.textContent = date;
    weatherCardDiv.appendChild(dateP);

    let weatherCode = data.list[i].weather[0].icon;
    let weatherIcoIMG = document.createElement("img");
    let weatherIco = `https://openweathermap.org/img/wn/${weatherCode}@2x.png`;
    weatherIcoIMG.src = weatherIco;
    weatherCardDiv.appendChild(weatherIcoIMG);

    let weather = data.list[i].weather[0].main;
    let weatherP = document.createElement("p");
    weatherP.textContent = weather;
    weatherCardDiv.appendChild(weatherP);

    let weatherDes = data.list[i].weather[0].description;
    let weatherDesP = document.createElement("p");
    weatherDesP.textContent = weatherDes;
    weatherCardDiv.appendChild(weatherDesP);

    let max = data.list[i].main.temp_max;
    let maxP = document.createElement("p");
    maxP.textContent = "Temperature max: " + max;
    weatherCardDiv.appendChild(maxP);

    let min = data.list[i].main.temp_min;
    let minP = document.createElement("p");
    minP.textContent = "Temperature min: " + min;
    weatherCardDiv.appendChild(minP);

    let pressure = data.list[i].main.pressure;
    let pressureP = document.createElement("p");
    pressureP.textContent = "Pressure: " + pressure;
    weatherCardDiv.appendChild(pressureP);

    let humidity = data.list[i].main.humidity;
    let humidityP = document.createElement("p");
    humidityP.textContent = "Humidity: " + humidity;
    weatherCardDiv.appendChild(humidityP);

    let speedWind = data.list[i].wind.speed;
    let speedWindP = document.createElement("p");
    speedWindP.textContent = "Wind speed: " + speedWind;
    weatherCardDiv.appendChild(speedWindP);

    weatherCardsWrapper.appendChild(weatherCardDiv);
  }

  weatherDataContainer.appendChild(weatherCardsWrapper);
}
