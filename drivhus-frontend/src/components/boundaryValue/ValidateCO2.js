export default function validateCO2(newMaxCO2, newMinCO2) {
  //Check if both values are between 40-80 and max > min
  if (!(newMaxCO2 <= 800)) {
    console.log("max CO2-level was above 800");
    return false;
  }
  if (!(newMaxCO2 > 400)) {
    console.log("max CO2-level was below 401");
    return false;
  }
  if (!(newMinCO2 < 800)) {
    console.log("min CO2-level was above 799");
    return false;
  }
  if (!(newMinCO2 >= 400)) {
    console.log("min CO2-level was below 400");
    return false;
  }
  if (!(newMaxCO2 > newMinCO2)) {
    console.log("max CO2-level was not above min CO2-level");
    return false;
  }
  if (newMaxCO2 % 1 !== 0) {
    console.log("max CO2-level was not a valid number in increments of 1");
    return false;
  }

  if (newMinCO2 % 1 !== 0) {
    console.log("min CO2-level was not a valid number in increments of 1");
    return false;
  }

  if (newMaxCO2 === newMinCO2) {
    console.log("max and min CO2-level were equal");
    return false;
  }
  console.log("input validated successfully");
  return true;
}
