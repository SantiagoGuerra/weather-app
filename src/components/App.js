import SearchInput from './SearchInput';
import { createElement } from '../utils';
import { cityWeatherRequest } from '../actions';

export default function App() {
  const HeaderLayout = document.querySelector('#header');
  const searchButton = createElement('<button class="button-search"><i class="ri-search-2-line icon-search"></i></button>');
  HeaderLayout.appendChild(SearchInput('search-input'));
  HeaderLayout.appendChild(searchButton);

  const toggleTempTarget = document.querySelector('#toggle-temp');
  const toggleTempItemCeTarget = document.querySelector('.toggle-temp--item__ce');
  const toggleTempItemFaTarget = document.querySelector('.toggle-temp--item__fa');


  toggleTempItemCeTarget.addEventListener('click', () => {
    const cityName = toggleTempTarget.getAttribute('city-name');
    toggleTempItemCeTarget.classList.toggle('toggle-temp--item__selected');
    toggleTempItemFaTarget.classList.toggle('toggle-temp--item__selected');
    toggleTempTarget.setAttribute('metric-type', 'metric');

    cityWeatherRequest(cityName, '', 'metric');
  });

  toggleTempItemFaTarget.addEventListener('click', () => {
    const cityName = toggleTempTarget.getAttribute('city-name');
    toggleTempItemFaTarget.classList.toggle('toggle-temp--item__selected');
    toggleTempItemCeTarget.classList.toggle('toggle-temp--item__selected');
    toggleTempTarget.setAttribute('metric-type', 'imperial');
    cityWeatherRequest(cityName, '', 'imperial');
  });
}
