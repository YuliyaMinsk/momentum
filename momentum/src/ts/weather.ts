import i18next from './i18n.js';

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
  const weatherIcon = document.querySelector('.weather-icon');
  const temperature = document.querySelector('.temperature');
  const weatherDescription = document.querySelector('.weather-description');
  const wind = document.querySelector('.wind');
  const humidity = document.querySelector('.humidity');
  
  const language = String((<HTMLInputElement>document.querySelector('input[name="language"]:checked')).value);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${language}&appid=6b3a2273b08c95fbb5090284a500de4e&units=metric`;
  
  try {
    const res = await fetch(url);
    const data = await res.json(); 

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `${i18next.t('wind')} ${Math.floor(data.wind.speed)} м/с`;
    humidity.textContent = `${i18next.t('humidity')} ${data.main.humidity}%`;
  } catch (e) {
    (<HTMLElement>weatherIcon).className = 'weather-icon owf';
    temperature.textContent = i18next.t('error-weather');
    weatherDescription.textContent = '';
    wind.textContent = '';
    humidity.textContent = '';
  }

}

function saveCity(city: string) {
  localStorage.setItem('city', city);
}

function loadCity(): string {
  return localStorage.getItem('city');
}