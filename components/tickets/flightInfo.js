import { createText } from '../text.js';
export const setFlightInfo = (depTime, depAirport, arrTime, arrAirport) => {
  const flightDiv = document.createElement('div');

  const time = document.createElement('div');

  const airports = document.createElement('div');

  flightDiv.innerText = 'Flight Info';

  return flightDiv;
};
