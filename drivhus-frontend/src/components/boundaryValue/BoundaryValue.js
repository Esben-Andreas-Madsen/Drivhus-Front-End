import { useEffect, useState } from "react";
import styles from "./boundaries.module.css";

function BoundaryValue() {
  const [tempMax, setTempMax] = useState("");
  const [tempMin, setTempMin] = useState("");

  const [humiMax, setHumiMax] = useState("");
  const [humiMin, setHumiMin] = useState("");

  const [CO2Max, setCO2Max] = useState("");
  const [CO2Min, setCO2Min] = useState("");

  useEffect(() => {
    getConfig();
  });

  async function getConfig() {
    try {
      //Fetch all current configurations
      const url = "http://70.34.253.20:5001/Config/GetConfig";
      const response = await fetch(url);
      const data = await response.json();

      //Current temp configs
      const tempMax = data.value.map((config) => config.maxTemperature);
      const tempMin = data.value.map((config) => config.minTemperature);
      setTempMax(tempMax);
      setTempMin(tempMin);

      //Curent humi configs
      const humiMax = data.value.map((config) => config.maxHumidity);
      const humiMin = data.value.map((config) => config.minHumidity);
      setHumiMax(humiMax);
      setHumiMin(humiMin);

      //Curent CO2 configs
      const CO2Max = data.value.map((config) => config.maxHumidity);
      const CO2Min = data.value.map((config) => config.minHumidity);
      setCO2Max(CO2Max);
      setCO2Min(CO2Min);
    } catch (err) {
      console.log(err);
    }
  }

  async function updateConfig() {
    try {
      //Collect all user inputs, if they're empty set them to the previous config value
      let newMaxTemp = document.getElementById("inputMaxTempField").value;
      if (newMaxTemp === "") {
        newMaxTemp = tempMax;
      }
      let newMinTemp = document.getElementById("inputMinTempField").value;
      if (newMinTemp === "") {
        newMinTemp = tempMin;
      }

      let newMaxHumi = document.getElementById("inputMaxHumiField").value;
      if (newMaxHumi === "") {
        newMaxHumi = humiMax;
      }
      let newMinHumi = document.getElementById("inputMinHumiField").value;
      if (newMinHumi === "") {
        newMinHumi = humiMin;
      }

      let newMaxCO2 = document.getElementById("inputMaxCO2Field").value;
      if (newMaxCO2 === "") {
        newMaxCO2 = CO2Max;
      }
      let newMinCO2 = document.getElementById("inputMinCO2Field").value;
      if (newMinCO2 === "") {
        newMinCO2 = CO2Min;
      }
      console.log(
        newMaxTemp,
        newMinTemp,
        newMaxHumi,
        newMinHumi,
        newMaxCO2,
        newMinCO2
      );

      //Clear response
      document.getElementById("responseField").innerHTML = "";

      //Validate each userinput and set response-text
      const validatedTemp = validateTemp(newMaxTemp, newMinTemp);
      if (!validatedTemp) {
        document.getElementById("responseField").innerHTML +=
          "Temperature must be in the range of 0-100 and in 0.5 - 1 increments, and max > min. <br>";
      }

      const validatedHumi = validateHumi(newMaxHumi, newMinHumi);
      if (!validatedHumi) {
        document.getElementById("responseField").innerHTML +=
          "Humidity must be in the range of 0-100 and in 0.5 - 1 increments, and max > min. <br>";
      }

      const validatedCO2 = validateCO2(newMaxCO2, newMinCO2);
      if (!validatedCO2) {
        document.getElementById("responseField").innerHTML +=
          "CO2 in the range of 400-800 and in increments of 1, and max > min. <br>";
      }

      //If every validation matches the checks
      if (validatedTemp && validatedHumi && validatedCO2) {
        const url = "http://70.34.253.20:5001/Config/UpdateConfig";
        const response = await fetch(url, {
          method: "PUT",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            plant: "tomat",
            minTemperature: { newMinTemp },
            maxTemperature: { newMaxTemp },
            minHumidity: { newMinHumi },
            maxHumidity: { newMaxHumi },
            minCo2: { newMinCO2 },
            maxCo2: { newMaxCO2 },
          }),
        });
        if (!response.ok) {
          console.log(response);
          document.getElementById("responseField").innerHTML = "Network error";
        } else {
          document.getElementById("responseField").innerHTML =
            "Successfully updates configurations";
          getConfig();
        }
      }
    } catch (err) {
      console.log(err);
      document.getElementById("responseField").innerHTML =
        "Something went wrong";
    }
  }

  function validateTemp(newMaxTemp, newMinTemp) {
    //Check if both values are between 1-100 and max > min
    if (!(newMaxTemp <= 100)) {
      return false;
    }
    if (!(newMaxTemp >= 1)) {
      return false;
    }
    if (!(newMinTemp <= 100)) {
      return false;
    }
    if (!(newMinTemp >= 1)) {
      return false;
    }
    if (!(newMaxTemp > newMinTemp)) {
      return false;
    }
    if (!(newMaxTemp % 1 !== 0 || newMaxTemp % 1 !== 0.5)) {
      return false;
    }
    if (!(newMaxTemp % 1 !== 0 || newMaxTemp % 1 !== 0.5)) {
      return false;
    }
    return true;
  }

  function validateHumi(newMaxHumi, newMinHumi) {
    //Check if both values are between 1-100 and max > min
    if (!(newMaxHumi <= 100)) {
      return false;
    }
    if (!(newMaxHumi >= 1)) {
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
    if (!(newMaxHumi % 1 !== 0 || newMaxHumi % 1 !== 0.5)) {
      return false;
    }
    if (!(newMinHumi % 1 !== 0 || newMinHumi % 1 !== 0.5)) {
      return false;
    }
    return true;
  }

  function validateCO2(newMaxCO2, newMinCO2) {
    //Check if both values are between 1-100 and max > min
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
    return true;
  }

  return (
    <>
      <div className={styles.boundaryOuterContainer}>
        <div className={styles.boundaryContainer}>
          <h2>Temperature</h2>
          <div>
            <label htmlFor="inputMaxTempField">Max Value: </label>
            <input
              type="number"
              id="inputMaxTempField"
              placeholder={tempMax + "°C"}
              min="0"
              max="100"
              step="0.5"
            ></input>
          </div>
          <div>
            <label htmlFor="inputMinTempField">Min Value: </label>
            <input
              type="number"
              id="inputMinTempField"
              placeholder={tempMin + "°C"}
              min="0"
              max="100"
              step="0.5"
            ></input>
          </div>
        </div>

        <div className={styles.boundaryContainer}>
          <h2>Humidity</h2>
          <div>
            <label htmlFor="inputMaxHumiField">Max Value: </label>
            <input
              type="number"
              id="inputMaxHumiField"
              placeholder={humiMax + "%"}
              min="0"
              max="100"
              step="0.5"
            ></input>
          </div>
          <div>
            <label htmlFor="inputMinHumiField">Min Value: </label>
            <input
              type="number"
              id="inputMinHumiField"
              placeholder={humiMin + "%"}
              min="0"
              max="100"
              step="0.5"
            ></input>
          </div>
        </div>

        <div className={styles.boundaryContainer}>
          <h2>CO2</h2>
          <div>
            <label htmlFor="inputMaxCO2Field">Max Value: </label>
            <input
              type="number"
              id="inputMaxCO2Field"
              placeholder={CO2Max + "ppm"}
              min="400"
              max="800"
              step="20"
            ></input>
          </div>
          <div>
            <label htmlFor="inputMinCO2Field">Min Value: </label>
            <input
              type="number"
              id="inputMinCO2Field"
              placeholder={CO2Min + "ppm"}
              min="400"
              max="800"
              step="1"
            ></input>
          </div>
        </div>
      </div>

      <div className={styles.responseMsg}>
        <p id="responseField" htmlFor="responseField">
          X
        </p>
      </div>

      <input
        className={styles.submitBtn}
        type="button"
        id="submitBtn"
        value={"Update Configuration"}
        onClick={() => updateConfig()}
      ></input>
    </>
  );
}

export default BoundaryValue;
