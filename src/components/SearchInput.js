import { curry } from 'rambda';
import { createElement } from '../utils';

const SearchInput = curry(id => {
  const SearchInput = createElement(`<input id=${id} type="search" class="input-search" />`);
  return SearchInput;
});

export default SearchInput;