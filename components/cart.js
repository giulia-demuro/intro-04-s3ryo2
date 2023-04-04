import { createText } from './text.js';
import { createCartElement } from './cart/cartElement';
import { removeFromCart, getCartItems, getTotal } from '../state';

export const createCart = (options) => {
  const cartDiv = document.createElement('div');
  const cartHeader = document.createElement('div');

  const cartElements = document.createElement('div');
  cartElements.setAttribute('id', 'cart-elements');
  cartElements.classList.add('d-flex-col');

  const headerText = createText('Cart', 'white', '1.2rem', 'h3', 'bold');

  cartHeader.setAttribute('id', 'cart-header');

  cartDiv.setAttribute('id', 'cart');

  const totalText = createText('€0.00', 'white', '1.2rem', 'h3', 'bold');
  totalText.setAttribute('id', 'total');

  cartHeader.append(headerText, totalText);
  cartHeader.classList.add('d-flex');

  cartDiv.append(cartHeader, cartElements);

  return cartDiv;
};

export const refreshCartElements = () => {
  const elements = getCartItems();

  const cartElements = document.getElementById('cart-elements');
  const totalText = document.getElementById('total');

  cartElements.innerHTML = '';

  elements.forEach((item) => {
    const newElement = createCartElement({
      depTime: item.departureTime,
      depAirport: item.departureAirport,
      arrTime: item.arrivalTime,
      arrAirport: item.arrivalAirport,
      price: item.price,
      onclick: () => removeFromCart(item),
    });

    cartElements.appendChild(newElement);
  });

  totalText.innerText = getTotal();
};

export const appendCartElement = (item) => {
  const newElement = createCartElement({
    depTime: item.departureTime,
    depAirport: item.departureAirport,
    arrTime: item.arrivalTime,
    arrAirport: item.arrivalAirport,
    price: item.price,
  });

  const cartElements = document.getElementById('cart-elements');
  const cartTotal = document.getElementById('total');

  cartTotal.innerText = `€${increaseTotal(total, item.price)}`;
  console.log(cartElements);

  cartElements.appendChild(newElement);
};

export const deleteCartElement = (item) => {
  const { elementId, element } = item;
  let cartElements = document.getElementById('cart-elements');
  const cartTotal = document.getElementById('total');

  cartTotal.innerText = `€${decreaseTotal(total, element.price)}`;
  const cartElement = document.getElementById(elementId);

  cartElement.remove();

  console.log(element);
};
