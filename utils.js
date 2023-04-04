export const calculateTravelTime = (departure, arrival) => {
  const dep = parseFloat(departure.replace(':', '.'));
  const arr = parseFloat(arrival.replace(':', '.'));
  const travelTime = String((arr - dep).toFixed(2));

  const splicedTime = travelTime.slice('.');

  console.log(splicedTime);
};
