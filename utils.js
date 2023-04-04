import { cartList } from './components/container';
import { flights } from './data';
import { updateCart } from './components/container';

export const tempCart = [];

export const increaseTotal = (total, price) => {
  total += price;
  console.log(total);

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
  if (tempCart.length === 2) {
    return alert('Remove a flight first');
  }
  const name = e.target.getAttribute('name');
  const elementDiv = document.getElementById(name);
  const element = flights.find((item) => item.price === Number(name));

  e.target.setAttribute('disabled', true);

  elementDiv.classList.add('class', 'selected');

  tempCart.push(element);
  console.log(tempCart);

  
  //cartList.push(element);
};
