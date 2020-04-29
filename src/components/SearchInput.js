import { curry } from 'rambda';
import { createElement } from '../utils';
import { onFocus, onBlur, onKeyUp } from '../actions';

const SearchInput = curry(id => {
  const searchInput = createElement(`<input id=${id} type="search" class="input-search" placeholder="Search"/>`);


  searchInput.addEventListener('focus', e => onFocus(e));
  searchInput.addEventListener('blur', e => onBlur(e));
  searchInput.addEventListener('keyup', e => onKeyUp(e));
  return searchInput;
});

export default SearchInput;