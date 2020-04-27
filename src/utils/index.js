import { curry } from 'rambda';

export const createElement = curry(string => {
  const container = document.createElement('div');
  container.innerHTML = string;
  const element = container.firstChild;

  return element;
});

export const appendHTML = curry((query, string) => {
  const element = document.querySelector(query);
  element.innerHTML = string;
  return string;
});

export const searchWeatherIcon = curry(group => {
  console.log(typeof group)

  let icon = '';

    if(group >= 200 && group <= 232) {
      icon = '<i class="ri-thunderstorms-line"></i>';
    } else if (group >= 300 && group <= 321) {
      icon = '<i class="ri-drizzle-line"></i>';
    } else if (group >= 500 && group <= 531) {
      icon = '<i class="ri-showers-line"></i>';
    } else if (group >= 600 && group <= 622) {
      icon = '<i class="ri-snowy-line"></i>';
    } else if (group >= 700 && group <= 781) {
      icon = '<i class="ri-mist-fill"></i>';
    } else if (group === 800) {
      icon = '<i class="ri-sun-line"></i>';
    } else if (group >= 801 && group <= 804) {
      icon = '<i class="ri-cloudy-line"></i>';
    } else {
      icon = group;
    }

  return icon;
})