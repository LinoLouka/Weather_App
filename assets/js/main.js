let send = document.getElementById("send");
let cityname = document.getElementById("search").value;

send.addEventListener("click", weather);

async function weather() {
  let url = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=5&appid=00dde611c283263cbabba55f2e6247f0`
  );
  let data = await url.json();

  console.log(url);
  console.log(data);
}
console.log(cityname);
