export function runWeather() {
  const city = (<HTMLInputElement>document.querySelector('.city'));
  const citySaved = loadCity();

  if (citySaved) city.value = citySaved;

  city.addEventListener('change', function (event) {
    if (city.value) {
      saveCity(city.value);
      getWeather(city.value);
    }
  });

  getWeather(city.value);
}

async function getWeather(city: string) {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=6b3a2273b08c95fbb5090284a500de4e&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 

  const weatherIcon = document.querySelector('.weather-icon');
  const temperature = document.querySelector('.temperature');
  const weatherDescription = document.querySelector('.weather-description');
  const wind = document.querySelector('.wind');
  const humidity = document.querySelector('.humidity');

  console.log(data);

  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `Скорость ветра: ${Math.floor(data.wind.speed)} м/с`;
  humidity.textContent = `Влажность: ${data.main.humidity}%`;
}

function saveCity(city: string) {
  localStorage.setItem('city', city);
}

function loadCity(): string {
  return localStorage.getItem('city');
}