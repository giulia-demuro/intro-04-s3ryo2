import { setText } from './text.js';

export const setButton = (
  text,
  textColor,
  textSize,
  textTag,
  textStyle,
  style
) => {
  const newButton = document.createElement('button');
  const btnText = setText(text, textColor, textSize, textTag, textStyle);
  newButton.appendChild(btnText);
  newButton.classList.add(style);
  newButton.classList.add('button');

  return newButton;
};
