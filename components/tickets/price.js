import { createText } from '../text.js';
export const setPrice = (price) => {
  const priceText = createText(`€${price}`, 'black', '1rem', 'h3', 'bold');

  return priceText;
};
