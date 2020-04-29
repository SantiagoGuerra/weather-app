import { curry } from 'rambda';
import axios from 'axios';
import { createElement } from '../utils';
import Current from './Current';
import Daily from './Daily';
import Hourly from './Hourly';

const API_KEY = '258bddd1149b9057eb93d11a2ab1e5da';


const getWeatherFromName = curry((cityName, countryCode, metricType) => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&units=${metricType}&appid=${API_KEY}`));

const getWeatherFromCoords = curry((coords, metricType) => axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&units=${metricType}&appid=${API_KEY}`));

// eslint-disable-next-line max-len
const cityWeatherRequest = curry((countryName, countryCode, metricType) => getWeatherFromName(countryName, countryCode, metricType)
  .then(result => {
    Current(result.data, true);
    return result.data.coord;
  })
  .then(coord => {
    getWeatherFromCoords(coord, metricType)
      .then(result => {
        Daily(result.data);

        return result.data;
      })
      .then(data => {
        Hourly(data);
        return data;
      });
    return coord;
  })
  .catch((err) => {
    Current(err.data, false);
  }));
const onListClick = curry(event => {
  const countryName = event.target.parentElement.getAttribute('data-city-name');
  const countryCode = event.target.parentElement.getAttribute('data-city-countryCode');
  const getTempMetric = document.querySelector('#toggle-temp')
  const getTempMetricType = getTempMetric.getAttribute('metric-type');
  getTempMetric.setAttribute('city-name', countryName);
  cityWeatherRequest(countryName, countryCode, getTempMetricType);
});

const appendCities = curry(cityList => {
  const searchResults = document.querySelector('#search-results');
  searchResults.innerHTML = '';

  cityList.forEach(city => {
    const list = createElement(`<li class="search-result-item" data-city-name="${city.name}" data-city-countryCode="${city.countryCode}"><span class="search-result-item__city-name">${city.name}</span><span class="search-result-item__city-country">${city.country}</span><span class="search-result-item__icon-container"><i class="ri-map-pin-line icon-location"></i></span></li>`);
    list.addEventListener('click', e => onListClick(e));
    searchResults.appendChild(list);
  });
});

const getCity = curry(name => axios.get(`http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${name}&limit=5&offset=0&hateoasMode=false`));


const onFocus = curry(() => {
  const searchResults = document.querySelector('#search-results');
  searchResults.style.display = 'block';
  searchResults.classList.add('animated', 'bounceInDown');
});

const onBlur = curry(() => {
  const searchResults = document.querySelector('#search-results');
  searchResults.classList.remove('animated', 'bounceInDown');

  setTimeout(() => {
    searchResults.style.display = 'none';
  }, 200);
});

const onKeyUp = curry(event => {
  const { value } = event.target;

  if (event.keyCode === 13) {
    event.preventDefault();

    event.target.blur();
    const getTempMetric = document.querySelector('#toggle-temp')
    const getTempMetricType = getTempMetric.getAttribute('metric-type');
    getTempMetric.setAttribute('city-name', value);
    return cityWeatherRequest(value, '', getTempMetricType);
  }
  if (value.length > 0) {
    getCity(value)
      .then(result => appendCities(result.data.data));
  }

  return event;
});


const SearchInput = curry(id => {
  const searchInput = createElement(`<input id=${id} type="search" class="input-search" placeholder="Search"/>`);


  searchInput.addEventListener('focus', e => onFocus(e));
  searchInput.addEventListener('blur', e => onBlur(e));
  searchInput.addEventListener('keyup', e => onKeyUp(e));
  return searchInput;
});

export default SearchInput;