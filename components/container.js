import { ticketsList } from './tickets/ticketsList';
import { createCart } from './cart/cart';

export const createContainer = () => {
  const containerDiv = document.createElement('div');

  containerDiv.setAttribute('id', 'container');
  containerDiv.classList.add('d-flex');

  const ticketsUl = ticketsList();
  const cart = createCart();

  containerDiv.append(ticketsUl, cart);

  return containerDiv;
};
