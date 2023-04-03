export const createContainer = () => {
  const containerDiv = document.createElement('div');

  containerDiv.setAttribute('id', 'container');
  containerDiv.innerText = 'Container';

  return containerDiv;
};
