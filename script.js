const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", async () => {
  const city = searchBox.value;
  const response = await fetch(/api/weather?city=${city});
  
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    const weatherIcon = document.querySelector(".weather-icon");
    const icon = data.weather[0].main;

    if (icon === "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (icon === "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (icon === "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (icon === "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (icon === "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (icon === "Snow") {
      weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
});
