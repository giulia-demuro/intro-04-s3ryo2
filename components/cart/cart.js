import { createText } from '../text.js';

export const createCart = (options) => {
  const { total, cartList } = options;
  const cartDiv = document.createElement('div');
  const cartHeader = document.createElement('div');
  const cartElements = document.createElement('div');

  cartElements.classList.add('cart-elements');
  cartElements.classList.add('d-flex-col');

  const headerText = createText('Cart', 'white', '1.2rem', 'h3', 'bold');
  cartHeader.setAttribute('id', 'cart-header');

  const totalText = createText(
    `€${total || '0.00'}`,
    'white',
    '1.2rem',
    'h3',
    'bold'
  );

  cartHeader.append(headerText, totalText);
  cartHeader.classList.add('d-flex');

  cartDiv.setAttribute('id', 'cart');

  cartList.length === 0
    ? (cartElements.innerText = 'No ticket selected')
    : cartList.forEach((item) => {
        const cartElement = document.createElement('div');
        cartElement.innerText = 'Element';

        console.log(cartElement);

        cartElements.appendChild(cartElement);
      });

  cartDiv.append(cartHeader, cartElements);

  return cartDiv;
};
