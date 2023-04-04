import { ticketsList } from './tickets/ticketsList';
import { createCart } from './cart/cart';
import { flights } from '../data';

let cartList = [flights[0]];

export const updateCart = (element) => {
  console.log(element);
  cartList = element;
};

export const createContainer = () => {
  const containerDiv = document.createElement('div');

  console.log(cartList);

  containerDiv.setAttribute('id', 'container');
  containerDiv.classList.add('d-flex');

  console.log();
  const ticketsUl = ticketsList();
  const cart = createCart({ cartList });

  containerDiv.append(ticketsUl, cart);

  return containerDiv;
};
