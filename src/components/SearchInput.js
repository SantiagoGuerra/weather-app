import { curry } from 'rambda';
import { createElement } from '../utils';
import axios from 'axios';
import {appendHTML} from '../utils';

const getCity = curry(name => {
  return axios.get(`http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${name}&limit=5&offset=0&hateoasMode=false`)
})

const onFocus = curry(event => {
  const searchResults = document.querySelector('#search-results');
  searchResults.style.display = 'block';
  searchResults.classList.add('animated', 'bounceInDown')  
});

const onBlur = curry(event => {
  const searchResults = document.querySelector('#search-results');
  searchResults.classList.remove('animated', 'bounceInDown');

  searchResults.style.display = 'none';

});

const onKeyUp = curry(event => {
  const value = event.target.value;
  if(value.length > 0) {
    getCity(value)
    .then(result => appendCities(result.data.data))
  }
  
})

const appendCities = curry(cityList => {
  const searchResults = document.querySelector('#search-results');
  searchResults.innerHTML = ''

  cityList.forEach(city => {
    let list = createElement(`<li class="search-result-item"><span class="search-result-item__city-name">${city.name}</span><span class="search-result-item__city-country">${city.country}</span><span class="search-result-item__icon-container"><i class="ri-map-pin-line icon-location"></i></span></li>`)
    searchResults.appendChild(list)
  })
})

const SearchInput = curry(id => {
  const searchInput = createElement(`<input id=${id} type="search" class="input-search" placeholder="Search"/>`);
  
  

  searchInput.addEventListener('focus', e => onFocus(e))
  searchInput.addEventListener('blur', e => onBlur(e))
  searchInput.addEventListener('keyup', e => onKeyUp(e))
  return searchInput;
});

export default SearchInput;