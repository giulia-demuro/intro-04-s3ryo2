import { createButton } from '../button.js';
export const createTicket = (
  logo,
  companyInfo,
  flightInfo,
  price,
  bookingInfo
) => {
  const ticketElement = document.createElement('li');
  const mainInfo = document.createElement('div');
  const infoText = document.createElement('div');
  const hr = document.createElement('hr');

  const btn = createButton(
    'Book now',
    'white',
    '.8rem',
    'h6',
    'bold',
    'blue-bg'
  );

  infoText.append(logo, companyInfo, flightInfo, price);
  infoText.setAttribute('class', 'd-flex');
  infoText.setAttribute('class', 'info-div');

  mainInfo.append(infoText, btn);
  mainInfo.setAttribute('class', 'main-info');

  ticketElement.append(mainInfo, hr, bookingInfo);
  ticketElement.setAttribute('class', 'ticket');

  return ticketElement;
};
