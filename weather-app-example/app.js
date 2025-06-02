const API_KEY = "c093754c8749ea986a16d574f0d7b708";

const form = document.getElementById("weather-form");
const input = document.getElementById("city-input");
const resultDiv = document.getElementById("weather-result");
const errorDiv = document.getElementById("error-msg");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const city = input.value.trim();
  if (!city) return;
  resultDiv.innerHTML = "";
  errorDiv.textContent = "";

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${API_KEY}&units=metric&lang=kr`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("도시 정보를 찾을 수 없습니다.");
    const data = await res.json();

    const icon = data.weather[0].icon;
    const desc = data.weather[0].description;
    const temp = data.main.temp.toFixed(1);
    const cityName = data.name;
    const country = data.sys.country;

    resultDiv.innerHTML = `
      <div class="city">${cityName}, ${country}</div>
      <img class="icon" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}">
      <span class="temp">${temp}°C</span>
      <div class="desc">${desc}</div>
    `;
  } catch (err) {
    errorDiv.textContent = err.message || "오류가 발생했습니다.";
  }
});
