import { createContainer } from './components/container.js';

import './style.css';

const appDiv = document.getElementById('app');

const container = createContainer();

/* const container = document.createElement('div');
container.setAttribute('id', 'container');
container.classList.add('d-flex');

const ticketsList = document.createElement('ul');
const cart = document.createElement('div');

const getTickets = () => {
  flights.forEach((item) => {
    const ticket = document.createElement('li');
    ticket.setAttribute('class', 'ticket');

    //ticket.innerText = 'Ticket';
    const newText = setText('Ticket', 'red', '12px', 'h1', 'bold');
    const newButton = setButton('Book now', 'blue-bg');
    ticket.append(newText, newButton);

    ticketsList.appendChild(ticket);
  });

  ticketsList.setAttribute('id', 'tickets');
  ticketsList.classList.add('d-flex-col');
};

const createCart = () => {
  cart.setAttribute('id', 'cart');
  const cartHeader = document.createElement('div');
  cartHeader.setAttribute('id', 'cart-header');
  cartHeader.innerText = 'Cart';

  cart.appendChild(cartHeader);
  cart.innerText = 'Cart';
};

getTickets();
createCart();

container.append(ticketsList, cart); */
appDiv.appendChild(container);
