import { createText } from '../text.js';
import { createCartElement } from './cartElement';
import { tempCart, increaseTotal } from '../../utils';

console.log(tempCart);
export const createCart = (options) => {
  const { cartList } = options;
  let total = 0;
  const cartDiv = document.createElement('div');
  const cartHeader = document.createElement('div');
  const cartElements = document.createElement('div');

  console.log(tempCart.length);
  cartElements.setAttribute('id', 'cart-elements');
  //cartElements.classList.add('cart-elements');
  cartElements.classList.add('d-flex-col');

  const headerText = createText('Cart', 'white', '1.2rem', 'h3', 'bold');
  cartHeader.setAttribute('id', 'cart-header');

  cartDiv.setAttribute('id', 'cart');

  /* cartList.length === 0
    ? (cartElements.innerText = 'No ticket selected')
    : cartList.forEach((item) => {
        const element = createCartElement({
          depTime: item.departureTime,
          depAirport: item.departureAirport,
          arrTime: item.arrivalTime,
          arrAirport: item.arrivalAirport,
          price: item.price,
        });
        total = increaseTotal(total, item.price);
        cartElements.appendChild(element);
      }); */

  const totalText = createText(
    `€${total || '0.00'}`,
    'white',
    '1.2rem',
    'h3',
    'bold'
  );
  cartHeader.append(headerText, totalText);
  cartHeader.classList.add('d-flex');

  cartDiv.append(cartHeader, cartElements);

  return cartDiv;
};

export const appendElement = (item) => {
  const newElement = createCartElement({
    depTime: item.departureTime,
    depAirport: item.departureAirport,
    arrTime: item.arrivalTime,
    arrAirport: item.arrivalAirport,
    price: item.price,
  });

  const cartElements = document.getElementsByClassName;
};
