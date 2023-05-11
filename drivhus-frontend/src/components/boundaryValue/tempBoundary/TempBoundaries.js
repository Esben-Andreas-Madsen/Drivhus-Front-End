import styles from "../boundaries.module.css";

export default function TempBoundaries() {
  return (
    <div className={styles.boundaryBox1}>
      <h2>Temperature</h2>
      <div>
        <label for="inputField">Max Value: </label>
        <input
          type="text"
          id="inputField"
          name="inputField"
          placeholder="°C"
        ></input>
        <input
          type="button"
          id="inputButton"
          name="inputButton"
          value={"Update"}
        ></input>
      </div>
      <div>
        <label for="inputField">Min Value: </label>
        <input
          type="text"
          id="inputField"
          name="inputField"
          placeholder="°C"
        ></input>
        <input
          type="button"
          id="inputButton"
          name="inputButton"
          value={"Update"}
        ></input>
      </div>
    </div>
  );
}
