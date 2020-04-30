import { curry } from 'rambda';
import { createElement, searchWeatherIcon, detectTempMetric } from '../utils';

const Current = curry((data, stateOK) => {
  const parentElement = document.querySelector('#content');

  parentElement.innerHTML = '';

  const current = createElement('<div class="current"></div>');

  if (stateOK) {
    const metricType = document.querySelector('#toggle-temp').getAttribute('metric-type');

    const mainInformation = createElement(`<div class="current-main-info"><span class="icon-current-info">${searchWeatherIcon(data.weather[0].id)}</span> <span class="current-main-info__temp">${data.main.temp.toFixed()}</span> <i class="ri-${detectTempMetric(metricType)}-fill icon-celsius"></i></div>`);

    const countryInformation = createElement(`<div class="current-country-info">${data.name}, ${data.sys.country}</div>`);
    const weatherInformation = createElement(`<div class="current-weather-information"><div class="current-weather-description">${data.weather[0].description}</div>  <ul class="description"> <li> <span class="description-title">Humidity: </span> ${data.main.humidity}%</li> <li> <span class="description-title">Clouds: </span> ${data.clouds.all}%</li><li> <span class="description-title">Wind Speed: </span> ${data.wind.speed} m/s</li></ul></div>`);


    current.appendChild(mainInformation);
    current.appendChild(countryInformation);
    current.appendChild(weatherInformation);


    current.classList.add('animated', 'slideInDown', `weather-${(data.weather[0].id / 100).toFixed()}`);


    parentElement.appendChild(current);
  } else {
    const error = createElement('<div class="current-error-message"><h2 class="current-error-message__title">N<i class="ri-emotion-unhappy-line"></i>  RESULTS </h2><p class="current-error-message__subtitle">Please, try again</p></div>');

    current.appendChild(error);

    current.classList.add('current-error');

    parentElement.appendChild(current);
  }

  return current;
});

export default Current;