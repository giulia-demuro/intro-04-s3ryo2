import { createText } from './text.js';

export const createButton = (text, textSize, textTag, textStyle, style) => {
  const newButton = document.createElement('button');
  const btnText = createText(text, textSize, textTag, textStyle);
  newButton.appendChild(btnText);
  newButton.classList.add(style);
  newButton.classList.add('button');

  return newButton;
};
