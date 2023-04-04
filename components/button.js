export const createButton = (text, style, name, handleClick) => {
  const newButton = document.createElement('button');
  newButton.innerText = text;
  newButton.classList.add(style);
  newButton.classList.add('button');
  newButton.id = `${name}-btn`;
  newButton.onclick = handleClick;

  console.log(newButton.name);

  return newButton;
};
