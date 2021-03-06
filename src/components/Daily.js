import { curry } from 'rambda';
import moment from 'moment';
import { createElement, searchWeatherIcon, detectTempMetric } from '../utils';

const Daily = curry((data) => {
  const parentElement = document.querySelector('#content');

  const metricType = document.querySelector('#toggle-temp').getAttribute('metric-type');

  const dailyContainer = createElement('<div class="daily"> <h2>Daily:</h2> </div>');


  const dailyList = document.createElement('ul');
  dailyList.classList.add('daily-list');


  data.daily.forEach(day => {
    const date = moment(day.dt * 1000).format('ddd Do');

    const dailyListItem = createElement(`<li class="daily-list-item" ><span class="daily-list-item__date">${date}</span> <span class="daily-list-item__icon">${searchWeatherIcon(day.weather[0].id)}</span> <span class="daily-list-item__temp">${day.temp.day.toFixed()}<i class="ri-${detectTempMetric(metricType)}-line"></i></span></li>`);

    dailyList.appendChild(dailyListItem);
  });

  parentElement.appendChild(dailyContainer);

  dailyContainer.appendChild(dailyList);

  dailyList.classList.add('animated', 'fadeInLeft');

  return dailyContainer;
});


export default Daily;