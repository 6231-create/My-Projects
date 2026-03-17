async function getWeather() {
  const city = document.getElementById("city").value;

  const apiKey = "1a787a8263750d73944952a4decd62f1";  

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  document.getElementById("temp").textContent =
    `Temperature: ${data.main.temp}°C`;

  document.getElementById("desc").textContent =
    data.weather[0].description;
}