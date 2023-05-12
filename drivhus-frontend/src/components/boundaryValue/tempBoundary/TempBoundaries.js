import styles from "../boundaries.module.css";

function checkInput(input, minOrMax) {
  if (input % 1 === 0 || input % 1 === 0.5) {
    alert(minOrMax + "temperature updated to: " + input + "°C");
  } else {
    alert("Invalid input, please enter a number incrementing by 0.5 or 1");
  }
}

export default function TempBoundaries() {
  return (
    <div className={styles.boundaryBox1}>
      <h2>Temperature</h2>
      <div>
        <label for="inputField">Max Value: </label>
        <input type="text" id="inputMaxField" placeholder="°C"></input>
        <input
          type="button"
          id="inputMaxButton"
          value={"Update"}
          onClick={checkInput(
            document.getElementById("inputMaxField").value,
            "max"
          )}
        ></input>
      </div>
      <div>
        <label for="inputField">Min Value: </label>
        <input type="text" id="inputMinField" placeholder="°C"></input>
        <input
          type="button"
          id="inputMinButton"
          value={"Update"}
          onClick={checkInput(
            document.getElementById("inputMinField").value,
            "min"
          )}
        ></input>
      </div>
    </div>
  );
}
