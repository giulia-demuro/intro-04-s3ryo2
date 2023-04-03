import { createText } from '../text.js';
const calculateTravelTime = () => {};
export const setFlightInfo = (options) => {
  const { depTime, depAirport, arrTime, arrAirport } = options;
  const flightDiv = document.createElement('div');

  const time = document.createElement('div');
  const airports = document.createElement('div');

  time.innerText = 'Travel time';
  airports.innerText = 'Airports';

  flightDiv.classList.add('d-flex-col');
  flightDiv.append(time, airports);

  return flightDiv;
};
