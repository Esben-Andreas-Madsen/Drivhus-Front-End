import styles from "../boundaries.module.css";

function checkInput(input, minOrMax) {
  if (input % 1 === 0 || input % 1 === 0.5) {
    if (input !== "" && input < 100 && input > 0) {
      alert(minOrMax + "temperature updated to: " + input + "°C");
    } else {
      alert("Please input a number in the range of 0-100");
    }
  } else {
    alert(
      "Invalid input, please enter a number in the range of 0-100 and in 0.5 - 1 increments"
    );
  }
}

export default function TempBoundaries() {
  return (
    <div className={styles.boundaryBox1}>
      <h2>Temperature</h2>
      <div>
        <label for="inputField">Max Value: </label>
        <input
          type="number"
          id="inputMaxField"
          placeholder="°C"
          min="0"
          max="100"
          step="0.5"
        ></input>
        <input
          type="button"
          id="inputMaxButton"
          value={"Update"}
          onClick={() =>
            checkInput(document.getElementById("inputMaxField").value, "max")
          }
        ></input>
      </div>
      <div>
        <label for="inputField">Min Value: </label>
        <input
          type="number"
          id="inputMinField"
          placeholder="°C"
          min="0"
          max="100"
          step="0.5"
        ></input>
        <input
          type="button"
          id="inputMinButton"
          value={"Update"}
          onClick={() =>
            checkInput(document.getElementById("inputMinField").value, "min")
          }
        ></input>
      </div>
    </div>
  );
}
