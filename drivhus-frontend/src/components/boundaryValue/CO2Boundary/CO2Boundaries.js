import styles from "../boundaries.module.css";

// lav et tjek om minimum value er mindre end max value der sættes. ()

// tjekker om input er et tal, om det er i intervallet 0-1000000 og om det incrementes med 5000 + om min > max
function checkInput(input, minOrMax) {
  const maxInput = document.getElementById("inputMaxCO2Field").value;
  const minInput = document.getElementById("inputMinCO2Field").value;
  if (input % 1 === 0 && input >= 400 && input <= 800) {
    if (input !== "" && input <= 800 && input > 0) {
      if (minOrMax === "min" && input >= 799) {
        alert("Minimum value cannot exceed 799.");
        return;
      } else if (minOrMax === "max" && input <= 401) {
        alert("Maximum value cannot be less than 401.");
        return;
      } else if (minOrMax === "min" && input >= maxInput) {
        alert(
          "Minimum value cannot be greater than or equal to maximum value."
        );
        return;
      } else if (minOrMax === "max" && input <= minInput) {
        alert("Maximum value cannot be less than or equal to minimum value.");
        return;
      }
      alert(minOrMax + " CO2 level updated to: " + input + "ppm");
    } else {
      alert("Please input a ppm value in the range of 400-800");
    }
  } else {
    alert(
      "Invalid input, please enter a number in the range of 400-800 and in increments of 1 "
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
          min="400"
          max="800"
          step="1"
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
          min="400"
          max="800"
          step="1"
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
