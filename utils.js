import { refreshCartElements } from './components/cart';

export const refreshUI = (item) => {
  refreshCartElements();

  const selectedElement = document.getElementById(item.price);
  selectedElement.classList.toggle('selected');

  const button = document.getElementById(`${item.price}-btn`);
};

export const calculateTravelTime = (departure, arrival) => {
  const dep = parseFloat(departure.replace(':', '.'));
  const arr = parseFloat(arrival.replace(':', '.'));
  const travelTime = String((arr - dep).toFixed(2));

  const splicedTime = travelTime.split('.');
  return { hours: splicedTime[0], minutes: splicedTime[1] };
};
