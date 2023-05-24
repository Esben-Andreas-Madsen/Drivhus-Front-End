export default function validateCO2(newMaxCO2, newMinCO2) {
  //Check if both values are between 40-80 and max > min
  if (!(newMaxCO2 <= 800)) {
    return false;
  }
  if (!(newMaxCO2 >= 400)) {
    return false;
  }
  if (!(newMinCO2 <= 800)) {
    return false;
  }
  if (!(newMinCO2 >= 400)) {
    return false;
  }
  if (!(newMaxCO2 > newMinCO2)) {
    return false;
  }
  if (newMaxCO2 % 1 !== 0) {
    return false;
  }
  if (newMaxCO2 === newMinCO2) {
    return false;
  }
  return true;
}
