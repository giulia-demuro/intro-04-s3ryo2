import { flights } from '../../data';
import { createTicket } from './ticket';
import { createLogo } from './logo';
import { setCompanyInfo } from './companyInfo';
import { setFlightInfo } from './flightInfo';
import { setBookingInfo } from './bookingInfo';
import { setPrice } from './price';

export const ticketsList = () => {
  const tickets = document.createElement('ul');
  tickets.setAttribute('id', 'tickets');
  tickets.setAttribute('class', 'd-flex-col');

  flights.forEach((item) => {
   
    const companyInfo = setCompanyInfo(item.companyName, item.aircraftType);
    const flightInfo = setFlightInfo(
      item.departureTime,
      item.departureAirport,
      item.arrivalTime,
      item.arrivalAirport
    );
    const bookingInfo = setBookingInfo(item.flightClass, item.passengers);
    const price = setPrice(item.price);

    const ticket = createTicket(
      logo,
      companyInfo,
      flightInfo,
      price,
      bookingInfo
    );

    tickets.appendChild(ticket);
  });

  return tickets;
};
