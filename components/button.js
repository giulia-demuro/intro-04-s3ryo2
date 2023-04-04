import { createText } from './text.js';
import { handleClickTicket } from '../utils';
import { cartList } from './cart/cartElement';

export const createButton = (text, textSize, style, name) => {
  const newButton = document.createElement('button');
  //const btnText = createText(text, textSize, 'h6', 'bold');
  newButton.innerText = 'Book now';
  newButton.classList.add(style);
  newButton.classList.add('button');
  newButton.name = name;
  newButton.onclick = handleClickTicket;

  console.log(newButton.name);

  return newButton;
};
