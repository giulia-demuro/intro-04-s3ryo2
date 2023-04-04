import { refreshUI } from './utils';
const cart = {
  items: [],
  total: 0,
};

export const addToCart = (item) => {
  if (cart.items.length === 2) {
    return alert('Remove a flight first');
  }

  cart.items.push(item);
  cart.total += item.price;
  refreshUI(item);
};

export const removeFromCart = (item) => {
  cart.items = cart.items.filter((i) => i !== item);
  cart.total = cart.total === item.price ? 0 : cart.total - item.price;
  refreshUI(item);
};

export const getCartItems = () => {
  return cart.items;
};

export const getTotal = () => {
  return cart.total;
};
