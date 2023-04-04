const ticketsList = document.createElement('ul');

export const getTickets = (flights) => {
  flights.forEach((item) => {
    const ticket = document.createElement('li');
    ticket.innerText = 'Ticket';

    ticketsList.appendChild(ticket);
  });

  ticketsList.setAttribute('id', 'tickets');
  return ticketsList;
};
