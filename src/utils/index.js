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