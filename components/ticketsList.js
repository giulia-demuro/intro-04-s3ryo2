import { flights } from '../data';
import { createTicket } from './ticket';
import { setCompanyInfo } from './ticket/companyInfo';
import { setFlightInfo } from './ticket/flightInfo';
import { setBookingInfo } from './ticket/bookingInfo';
import { createPrice } from './ticket/price';
import { addToCart } from '../state';

export const ticketsList = () => {
  const tickets = document.createElement('div');
  tickets.setAttribute('id', 'tickets');
  tickets.setAttribute('class', 'd-flex-col');

  flights.forEach((item) => {
    const companyInfo = setCompanyInfo({
      companyName: item.companyName,
      companyLogo: item.companyLogo,
      aircraftType: item.aircraftType,
    });

    const flightInfo = setFlightInfo({
      depTime: item.departureTime,
      depAirport: item.departureAirport,
      arrTime: item.arrivalTime,
      arrAirport: item.arrivalAirport,
    });

    const bookingInfo = setBookingInfo({
      flightClass: item.flightClass,
      passengers: item.passengers,
    });

    const ticketId = item.price;

    const price = createPrice({
      price: item.price,
      onClick: () => addToCart(item),
    });
    const ticket = createTicket(companyInfo, flightInfo, price, bookingInfo);
    ticket.setAttribute('id', ticketId);

    tickets.appendChild(ticket);
  });

  return tickets;
};
