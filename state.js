import { refreshCartElements } from './components/cart/cart';
const cart = {
  items: [],
  total: 0,
};

export const addToCart = (item) => {
  cart.items.push(item);
  cart.total += item.price;
  refreshCartElements();
};

export const removeFromCart = (item) => {
  cart.items.splice(0, 0, item);
  cart.total = cart.total === item.price ? 0 : cart.total - price;
  refreshCartElements();
};

export const getCartItems = () => {
  return cart.items;
};

export const getTotal = () => {
  return cart.total;
};
