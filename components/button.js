import { createText } from './text.js';

import { cartList } from './cart/cartElement';

export const createButton = (text, style, name, handleClick) => {
  const newButton = document.createElement('button');
  newButton.innerText = text;
  newButton.classList.add(style);
  newButton.classList.add('button');
  newButton.id = `${name}${style === 'delete' ? '-cart' : ''}-btn`;
  newButton.onclick = handleClick;

  console.log(newButton.name);

  return newButton;
};
