import { cartList } from './components/container';
import { flights } from './data';
import { appendCartElement, deleteCartElement } from './components/cart/cart';

export const tempCart = [];
export const total = 0;

export const increaseTotal = (total, price) => {
  const cartElements = document.getElementsByClassName('cart-element');

  console.log(cartElements);

  total += price;

  return total;
};

export const decreaseTotal = (total, price) => {
  console.log(total, price);
  if (total === 0) {
    return 0;
  }
  total -= price;

  return total;
};

export const calculateTravelTime = (departure, arrival) => {
  const dep = parseFloat(departure.replace(':', '.'));
  const arr = parseFloat(arrival.replace(':', '.'));
  const travelTime = String((arr - dep).toFixed(2));

  const splicedTime = travelTime.split('.');
  return { hours: splicedTime[0], minutes: splicedTime[1] };
};

export const handleClickTicket = (e) => {
  const cartElements =
    document.getElementById('cart-elements').childElementCount;
  if (cartElements === 2) {
    return alert('Remove a flight first');
  }
  const id = e.target.getAttribute('id');
  const idSplitted = id.split('-');

  const elementDiv = document.getElementById(idSplitted[0]);

  const element = flights.find((item) => item.price === Number(idSplitted[0]));

  tempCart.push(elementDiv);

  e.target.setAttribute('disabled', true);

  elementDiv.classList.add('selected');

  appendCartElement(element);
};

export const handleClickDelete = (e) => {
  const id = e.target.getAttribute('id');

  const idSplitted = id.split('-');

  const elementDiv = document.getElementById(idSplitted[0]);
  const button = document.getElementById(`${idSplitted[0]}-${idSplitted[2]}`);

  const element = flights.find((item) => item.price === Number(idSplitted[0]));

  button.removeAttribute('disabled');
  elementDiv.classList.remove('selected');

  deleteCartElement({ elementId: `${idSplitted[0]}-cart`, element });
};
