import { flights } from '../../data';
import { createTicket } from './ticket';
import { createLogo } from './logo';
import { setCompanyInfo } from './companyInfo';
import { setFlightInfo } from './flightInfo';
import { setBookingInfo } from './bookingInfo';
import { createPrice } from './price';

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

    const price = createPrice({ price: item.price });

    const ticket = createTicket(companyInfo, flightInfo, price, bookingInfo);

    tickets.appendChild(ticket);
  });

  return tickets;
};
