import { ticketsList } from './tickets/ticketsList';

export const createContainer = () => {
  const containerDiv = document.createElement('div');
  containerDiv.setAttribute('id', 'container');
  containerDiv.classList.add('d-flex');

  const ticketsUl = ticketsList();

  containerDiv.innerText = 'Container';

  containerDiv.appendChild(ticketsUl);

  return containerDiv;
};
