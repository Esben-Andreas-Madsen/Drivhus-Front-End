export default function validateTemp(newMaxTemp, newMinTemp) {
  //Check if both values are between 1-100 and max > min
  if (!(newMaxTemp <= 100)) {
    console.log("max was above 100");
    return false;
  }
  if (!(newMaxTemp > 1)) {
    console.log("max was below 2");
    return false;
  }
  if (!(newMinTemp <= 99)) {
    console.log("min was above 99");
    return false;
  }
  if (!(newMinTemp >= 1)) {
    console.log("min was below 1");
    return false;
  }
  if (newMaxTemp < newMinTemp) {
    console.log("min was bigger than max");
    return false;
  }
  if (newMaxTemp % 1 !== 0 && newMaxTemp % 1 !== 0.5) {
    console.log("max was not in increments of 0.5 or 1");
    return false;
  }
  if (newMinTemp % 1 !== 0 && newMinTemp % 1 !== 0.5) {
    console.log("min was not in increments of 0.5 or 1");
    return false;
  }
  if (newMaxTemp === newMinTemp) {
    console.log("min and max were equal");
    return false;
  }
  console.log("input validated successfully");
  return true;
}
