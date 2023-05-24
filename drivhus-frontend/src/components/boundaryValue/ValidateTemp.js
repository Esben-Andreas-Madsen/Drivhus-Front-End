export default function validateTemp(newMaxTemp, newMinTemp) {
  //Check if both values are between 1-100 and max > min
  if (!(newMaxTemp <= 100)) {
    return false;
  }
  if (!(newMaxTemp > 1)) {
    return false;
  }
  if (!(newMinTemp <= 99)) {
    return false;
  }
  if (!(newMinTemp >= 1)) {
    return false;
  }
  if (newMaxTemp < newMinTemp) {
    return false;
  }
  if (newMaxTemp % 1 !== 0 && newMaxTemp % 1 !== 0.5) {
    return false;
  }
  if (newMinTemp % 1 !== 0 && newMinTemp % 1 !== 0.5) {
    return false;
  }
  if (newMaxTemp === newMinTemp) {
    return false;
  }
  return true;
}
