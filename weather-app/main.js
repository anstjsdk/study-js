const form = document.querySelector(".form-weather");
const input = document.querySelector(".input");
const information = document.querySelector(".information");
const err = document.querySelector(".err");
const API_KEY = "c093754c8749ea986a16d574f0d7b708";

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const city = input.value.trim();
  if (!city) return;
  information.innerHTML = "";
  err.textContent = "";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${API_KEY}&units=metric&lang=kr`;
  const res = await fetch(url);
  const data = await res.json();

  const icon = data.weather[0].icon;
  const desc = data.weather[0].description;
  const temp = data.main.temp.toFixed(1);
  const cityName = data.name;
  const country = data.sys.country;

  information.innerHTML = `
    <div class="city">${cityName},${country}</div>
    <img class="icon" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}">
    <div class="temp">${temp}°C</div>
    <div class"description">${desc}</div>
  `
});
