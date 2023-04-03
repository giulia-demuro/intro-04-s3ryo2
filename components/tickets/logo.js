export const logo = (logoSrc) => {
  const logoImage = document.createElement('img');

  logoImage.src = logoSrc;
  logoImage.classList.add('logo');

  return logoImage;
};
