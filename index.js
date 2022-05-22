const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");

// Daca nu avem oras salvat in localStorage, salvam orasul default, adica Bucuresti.
if (!currentCity) {
  localStorage.setItem("city", "București");
  currentCity = "București";
}

// Actualizam orasul afisat pe ecran.
currentCityTag.innerHTML = currentCity;

// Afisam vremea curenta si predictia pe 5 zile.
displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);

// Scroll to top button
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
