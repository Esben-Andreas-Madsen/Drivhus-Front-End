export default function validateHumi(newMaxHumi, newMinHumi) {
  //Check if both values are between 1-100 and max > min
  if (!(newMaxHumi <= 100)) {
    return false;
  }
  if (!(newMaxHumi > 1)) {
    return false;
  }
  if (!(newMinHumi <= 100)) {
    return false;
  }
  if (!(newMinHumi >= 1)) {
    return false;
  }
  if (!(newMaxHumi > newMinHumi)) {
    return false;
  }
  if (newMaxHumi % 1 !== 0 && newMaxHumi % 1 !== 0.5) {
    return false;
  }
  if (newMinHumi % 1 !== 0 && newMinHumi % 1 !== 0.5) {
    return false;
  }
  if (newMaxHumi === newMinHumi) {
    return false;
  }
  return true;
}
