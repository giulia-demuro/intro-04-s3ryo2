import { setText } from '../text.js';
export const setPrice = (price) => {
  const priceText = setText(price, 'black', '1rem', 'h3', 'bold');

  return priceText;
};
