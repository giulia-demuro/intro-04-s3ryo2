import { createText } from './text.js';

export const createButton = (
  text,
  textColor,
  textSize,
  textTag,
  textStyle,
  style
) => {
  const newButton = document.createElement('button');
  const btnText = createText(text, textColor, textSize, textTag, textStyle);
  newButton.appendChild(btnText);
  newButton.classList.add(style);
  newButton.classList.add('button');

  return newButton;
};
