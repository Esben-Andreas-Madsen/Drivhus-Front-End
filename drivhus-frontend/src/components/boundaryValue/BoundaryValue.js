import { useEffect, useState } from "react";
import styles from "./boundaries.module.css";
import validateTemp from "./ValidateTemp";
import validateHumi from "./ValidateHumi";
import validateCO2 from "./ValidateCO2";

function BoundaryValue() {
  const [tempMax, setTempMax] = useState(0);
  const [tempMin, setTempMin] = useState(0);
  const [humiMax, setHumiMax] = useState(0);
  const [humiMin, setHumiMin] = useState(0);

  const [CO2Max, setCO2Max] = useState(0);
  const [CO2Min, setCO2Min] = useState(0);

  useEffect(() => {
    getConfig();
  }, []);

  async function getConfig() {
    try {
      //Fetch all current configurations
      const url = "http://140.82.33.21:5001/Config/GetConfigByName?name=tomato";

      const response = await fetch(url);
      const data = await response.json();

      //Current temp configs
      const tempMax = data.map((config) => config.maxTemperature);
      const tempMin = data.map((config) => config.minTemperature);
      setTempMax(tempMax);
      setTempMin(tempMin);

      //Curent humi configs
      const humiMax = data.map((config) => config.maxHumidity);
      const humiMin = data.map((config) => config.minHumidity);
      setHumiMax(humiMax);
      setHumiMin(humiMin);

      //Curent CO2 configs
      const CO2Max = data.map((config) => config.maxCo2);
      const CO2Min = data.map((config) => config.minCo2);
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
        newMaxTemp = tempMax[0];
      }
      let newMinTemp = document.getElementById("inputMinTempField").value;
      if (newMinTemp === "") {
        newMinTemp = tempMin[0];
      }

      let newMaxHumi = document.getElementById("inputMaxHumiField").value;
      if (newMaxHumi === "") {
        newMaxHumi = humiMax[0];
      }
      let newMinHumi = document.getElementById("inputMinHumiField").value;
      if (newMinHumi === "") {
        newMinHumi = humiMin[0];
      }

      let newMaxCO2 = document.getElementById("inputMaxCO2Field").value;
      if (newMaxCO2 === "") {
        newMaxCO2 = CO2Max[0];
      }
      let newMinCO2 = document.getElementById("inputMinCO2Field").value;
      if (newMinCO2 === "") {
        newMinCO2 = CO2Min[0];
      }

      //Clear response
      document.getElementById("responseField").innerHTML = "";

      //Validate each userinput and set response-text
      const validatedTemp = validateTemp(newMaxTemp, newMinTemp);
      if (!validatedTemp) {
        document.getElementById("responseField").innerHTML +=
          "Temperature must be in the range of 0-100 and in 0.5 - 1 increments, max value must be bigger than min and they can't be the same. <br>";
      }

      const validatedHumi = validateHumi(newMaxHumi, newMinHumi);
      if (!validatedHumi) {
        document.getElementById("responseField").innerHTML +=
          "Humidity must be in the range of 0-100 and in 0.5 - 1 increments, max value must be bigger than min and they can't be the same. <br>";
      }

      const validatedCO2 = validateCO2(newMaxCO2, newMinCO2);
      if (!validatedCO2) {
        document.getElementById("responseField").innerHTML +=
          "CO2 in the range of 400-800 and in increments of 1, and max value must be bigger than min and they can't be the same. <br>";
      }

      console.log(
        newMinTemp,
        newMaxTemp,
        newMinHumi,
        newMaxHumi,
        newMinCO2,
        newMaxCO2
      );

      //If every validation matches the checks
      if (validatedTemp && validatedHumi && validatedCO2) {
        const url = "http://140.82.33.21:5001/Config/UpdateConfig";
        const options = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            plant: "tomato",
            minTemperature: newMinTemp,
            maxTemperature: newMaxTemp,
            minHumidity: newMinHumi,
            maxHumidity: newMaxHumi,
            minCo2: newMinCO2,
            maxCo2: newMaxCO2,
          }),
        };
        const response = await fetch(url, options);
        if (!response.ok) {
          console.log(response);
          document.getElementById("responseField").innerHTML = "Network error";
        }
        if (response.ok) {
          document.getElementById("responseField").innerHTML =
            "Successfully updates configurations";
          getConfig();
        }
      }
    } catch (err) {
      console.log(err);
      console.log("jeff");
      document.getElementById("responseField").innerHTML =
        "Something went wrong";
    }
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
              aria-label="inputMaxTempField"
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
              aria-label="inputMinTempField"
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
              aria-label="inputMaxHumiField"
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
              aria-label="inputMinHumiField"
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
              aria-label="inputMaxCO2Field"
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
              aria-label="inputMinCO2Field"
              placeholder={CO2Min + "ppm"}
              min="400"
              max="800"
              step="1"
            ></input>
          </div>
        </div>
      </div>

      <div className={styles.responseMsg}>
        <p
          id="responseField"
          htmlFor="responseField"
          aria-label="responseField"
        ></p>
      </div>

      <input
        className={styles.submitBtn}
        type="button"
        htmlFor="submitBtn"
        id="submitBtn"
        aria-label="submitBtn"
        value={"Update Configuration"}
        onClick={() => updateConfig()}
      ></input>
    </>
  );
}

export default BoundaryValue;
