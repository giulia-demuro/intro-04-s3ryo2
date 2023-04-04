import { createButton } from '../button.js';
import { createPrice } from './price';

export const createTicket = (companyInfo, flightInfo, price, bookingInfo) => {
  const ticketElement = document.createElement('div');
  const mainInfo = document.createElement('div');
  //const infoDiv = document.createElement('div');
  const hr = document.createElement('hr');

  /* infoDiv.append(companyInfo, flightInfo);
  infoDiv.setAttribute('class', 'd-flex');
  infoDiv.setAttribute('class', 'info-div'); */

  mainInfo.classList.add('main-info');
  mainInfo.classList.add('d-flex');
  mainInfo.append(companyInfo, flightInfo, price);

  ticketElement.append(mainInfo, hr, bookingInfo);
  ticketElement.setAttribute('class', 'ticket');

  return ticketElement;
};
