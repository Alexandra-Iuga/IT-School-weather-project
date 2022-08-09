const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");

if (!currentCity) {
  localStorage.setItem("city", "București");
  currentCity = "București";
}

currentCityTag.innerHTML = currentCity;

displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);

let scrollToTopButton = document.querySelector(".scroll-to-top");

function handleScroll() {
  if (window.scrollY > window.innerHeight / 2) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

window.addEventListener("scroll", handleScroll);

function handleClick() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

scrollToTopButton.addEventListener("click", handleClick);
