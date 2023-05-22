let send = document.getElementById("send");

async function weather() {
  let cityname = document.getElementById("search").value;

  let url = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=1&appid=00dde611c283263cbabba55f2e6247f0`
  );
  let data = await url.json();

  console.log(cityname);
  console.log(url);
  console.log(data);
  console.log(data[0].lat);
  console.log(data[0].lon);
}

send.addEventListener("click", weather);
