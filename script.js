const btn = document.getElementById("get-weather-btn");
const select = document.getElementById("city-select");
const display = document.getElementById("weather-display");

async function getWeather(city) {
  try {
    const res = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${encodeURIComponent(city)}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

async function showWeather(city) {
  const data = await getWeather(city);

  if (data === undefined || data === null) {
    alert("Something went wrong, please try again later.");
    display.style.display = "none";
    return;
  }

  if (data.cod && data.cod !== 200) {
    alert("Something went wrong, please try again later.");
    display.style.display = "none";
    return;
  }

  const na = (val) => (val !== undefined && val !== null ? val : "N/A");

  document.getElementById("weather-icon").src = na(data.weather?.[0]?.icon);
  document.getElementById("location").textContent = na(data.name);
  document.getElementById("weather-main").textContent = na(data.weather?.[0]?.main);
  document.getElementById("main-temperature").textContent = na(data.main?.temp);
  document.getElementById("feels-like").textContent = na(data.main?.feels_like);
  document.getElementById("humidity").textContent = na(data.main?.humidity);
  document.getElementById("wind").textContent = na(data.wind?.speed);
  document.getElementById("wind-gust").textContent = na(data.wind?.gust);

  display.style.display = "block";
}

btn.addEventListener("click", () => {
  const city = select.value;
  if (!city) return;
  showWeather(city);
});
