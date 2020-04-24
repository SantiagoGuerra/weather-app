import { curry } from 'rambda';
import { createElement } from '../utils';

const SearchInput = curry(id => {
  const SearchInput = createElement(`<input id=${id} type="search" class="input-search" placeholder="Search a city"/>`);
  return SearchInput;
});

export default SearchInput;