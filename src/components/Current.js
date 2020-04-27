import { curry } from 'rambda';
import { createElement } from '../utils';
import { searchWeatherIcon } from '../utils';

const Current = curry((data) => {
  const parentElement = document.querySelector('#content');

  parentElement.innerHTML = '';

  const current = createElement('<div class="current"></div>')

  const mainInformation = createElement(`<div class="current-main-info"><span class="icon-current-info">${searchWeatherIcon(data.weather[0].id)}</span> <span class="current-main-info__temp">${data.main.temp.toFixed()}</span> <i class="ri-celsius-fill icon-celsius"></i></div>`)

  const countryInformation = createElement(`<div class="current-country-info">${data.name}, ${data.sys.country}</div>`);
  const weatherInformation = createElement(`<div class="current-weather-information"><div class="current-weather-description">${data.weather[0].description}</div>  <ul class="description"> <li> <span class="description-title">Humidity: </span> ${data.main.humidity}%</li> <li> <span class="description-title">Clouds: </span> ${data.clouds.all}%</li><li> <span class="description-title">Wind Speed: </span> ${data.wind.speed} m/s</li></ul></div>`);


  current.appendChild(mainInformation);
  current.appendChild(countryInformation);
  current.appendChild(weatherInformation)

  current.classList.add('animated', 'slideInDown')

  parentElement.appendChild(current)
  return current;
})

export default Current;