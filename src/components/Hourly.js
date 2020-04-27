import { curry } from 'rambda';
import { createElement } from '../utils';

const Hourly = curry( data => {


  const parentElement = document.querySelector('#content');

  const hourly = createElement('<div><h2>Hourly</h2></div>')

  const chart = createElement('<canvas id="hourly-data" width="100%" height="300px"></canvas>')

  console.log(chart)

  console.log(data.hourly)
})

export default Hourly;