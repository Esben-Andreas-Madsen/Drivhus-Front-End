import styles from "../boundaries.module.css";

function checkInput(input, minOrMax) {
  if (input % 1 === 0 && input % 500 === 0 && input >= 0 && input <= 1000000) {
    if (input !== "" && input < 1000000 && input > 0) {
      alert(minOrMax + "humidity updated to: " + input + "ppm");
    } else {
      alert("Please input a ppm value in the range of 0-100000");
    }
  } else {
    alert(
      "Invalid input, please enter a number in the range of 0-100000 and in increments of 1000 "
    );
  }
}

export default function CO2Boundaries() {
  return (
    <div className={styles.boundaryBox1}>
      <h2>CO2</h2>
      <div>
        <label for="inputField">Max Value: </label>
        <input
          type="number"
          id="inputMaxCO2Field"
          placeholder="ppm"
          min="0"
          max="1000000"
          step="500"
        ></input>
        <input
          type="button"
          id="inputButton"
          value={"Update"}
          onClick={() =>
            checkInput(document.getElementById("inputMaxCO2Field").value, "max")
          }
        ></input>
      </div>
      <div>
        <label for="inputField">Min Value: </label>
        <input
          type="number"
          id="inputMinCO2Field"
          placeholder="ppm"
          min="0"
          max="1000000"
          step="500"
        ></input>
        <input
          type="button"
          id="inputButton"
          value={"Update"}
          onClick={() =>
            checkInput(document.getElementById("inputMinCO2Field").value, "min")
          }
        ></input>
      </div>
    </div>
  );
}
