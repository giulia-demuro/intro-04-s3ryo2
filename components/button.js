import { setText } from './text.js';

export const setButton = (text, style) => {
  const newButton = document.createElement('button');
  const btnText = setText('Book now', 'white', '1rem', 'h6', 'bold');
  newButton.appendChild(btnText);
  newButton.classList.add(style);
  newButton.classList.add('button');

  return newButton;
};
