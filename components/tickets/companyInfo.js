import { createText } from '../text';
export const setCompanyInfo = (companyName, aircraftType) => {
  const companyDiv = document.createElement('div');
  //const logo = createLogo(item.companyName, item.companyLogo);
  const companyText = createText(companyName, 'black', '1rem', 'h3', '400');
  const aircraftText = createText(aircraftType, 'grey', '0.8rem', 'p', 'bold');

  companyDiv.append(companyText, aircraftText);

  return companyDiv;
};
