import { curry } from 'rambda';
import { createElement } from '../utils';

const SearchInput = curry(id => {
  const searchInput = createElement(`<input id=${id} type="search" class="input-search" placeholder="Search a city"/>`);
  return searchInput;
});

export default SearchInput;