import { curry } from 'rambda';
import { createElement } from '../utils';
import { searchWeatherIcon } from '../utils';

const Current = curry((data) => {
  const parentElement = document.querySelector('#content');

  parentElement.innerHTML = '';

  const current = createElement('<div class="current"></div>')

  const mainInformation = createElement(`<div class="current-main-info"><span class="icon-current-info">${searchWeatherIcon(data.weather[0].id)}</span> <span class="current-main-info__temp">${data.main.temp.toFixed()}</span> <div><i class="ri-celsius-fill"></i> <i class="ri-fahrenheit-fill"></i></div></div>`)

  current.appendChild(mainInformation);

  current.classList.add('animated', 'slideInDown')

  parentElement.appendChild(current)
  return current;
})

export default Current;