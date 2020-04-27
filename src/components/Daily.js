import { curry } from 'rambda';
import { createElement } from '../utils';

const Daily = curry((data) => {

  const parentElement = document.querySelector('#content');

  const dailyContainer = createElement('<div> Example </div>')

  parentElement.appendChild(dailyContainer)

  return dailyContainer;

})


export default Daily;