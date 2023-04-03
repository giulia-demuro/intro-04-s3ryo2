import { setButton } from '../button.js';
export const ticket = (logo, companyInfo, flightInfo, price, bookingInfo) => {
  const ticketElement = document.createElement('li');
  const mainInfo = document.createElement('div');

  const btn = setButton('Book now', 'white', '1rem', 'h6', 'bold', 'blue-bg');

  mainInfo.append(logo, companyInfo, flightInfo, price, btn);
  ticketElement.append(mainInfo, bookingInfo);
};
