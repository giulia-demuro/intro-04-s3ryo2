import { ticketsList } from './tickets/ticketsList';
import { createCart } from './cart/cart';

export const createContainer = () => {
  const containerDiv = document.createElement('div');
  const total = 0;
  const cartList = ['El1', 'El2'];
  containerDiv.setAttribute('id', 'container');
  containerDiv.classList.add('d-flex');

  const ticketsUl = ticketsList();
  const cart = createCart({ total, cartList });

  containerDiv.append(ticketsUl, cart);

  return containerDiv;
};
