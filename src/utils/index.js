import { curry } from 'rambda';

export const createElement = curry(string => {
  const container = document.createElement('div');
  container.innerHTML = string;
  const element = container.firstChild;

  return element;
});

