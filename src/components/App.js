import SearchInput from './SearchInput';
import {createElement} from '../utils';

export default function App() {
  const HeaderLayout = document.querySelector('#header');
  const searchButton = createElement('<button class="button-search">search</button>');

  HeaderLayout.appendChild(SearchInput('search-input'));
  HeaderLayout.appendChild(searchButton)
}
