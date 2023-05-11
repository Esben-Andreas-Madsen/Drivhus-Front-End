import styles from "../boundaries.module.css";

export default function CO2Boundaries() {
  return (
    <div className={styles.boundaryBox1}>
      <h2>CO2</h2>
      <div>
        <label for="inputField">Max Value: </label>
        <input
          type="text"
          id="inputField"
          name="inputField"
          placeholder="ppm"
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
          placeholder="ppm"
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
