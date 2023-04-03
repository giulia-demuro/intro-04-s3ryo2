import { createText } from '../text';
import { createButton } from '../button';
export const createPrice = (options) => {
  const priceDiv = document.createElement('div');

  const { price } = options;
  const priceText = createText(`€${price}`, 'black', '1rem', 'h3', 'bold');
  const btn = createButton('Book now', '.8rem', 'h6', 'bold', 'blue-bg');

  priceDiv.classList.add('d-flex');
  priceDiv.classList.add('price');
  priceDiv.append(priceText, btn);

  return priceDiv;
};
