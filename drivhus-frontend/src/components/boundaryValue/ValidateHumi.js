export default function validateHumi(newMaxHumi, newMinHumi) {
  //Check if both values are between 1-100 and max > min
  if (!(newMaxHumi <= 100)) {
    console.log("max was above 100");
    return false;
  }
  if (!(newMaxHumi > 1)) {
    console.log("max was below 1");
    return false;
  }
  if (!(newMinHumi < 100)) {
    console.log("min was above 99");
    return false;
  }
  if (!(newMinHumi >= 1)) {
    console.log("min was below 1");
    return false;
  }
  if (!(newMaxHumi > newMinHumi)) {
    console.log("max was not above min");
    return false;
  }
  if (newMaxHumi % 1 !== 0 && newMaxHumi % 1 !== 0.5) {
    console.log("max was not a valid number in increments of 0.5 or 1");
    return false;
  }
  if (newMinHumi % 1 !== 0 && newMinHumi % 1 !== 0.5) {
    console.log("min was not a valid number in increments of 0.5 or 1");
    return false;
  }
  if (newMaxHumi === newMinHumi) {
    console.log("max and min were equal");
    return false;
  }
  console.log("input validated successfully");
  return true;
}
