import styles from "./boundaries.module.css";

export default function TempBoundaries() {
  return (
    <div className={styles.boundaryBox1}>
      <h2>Temperatur</h2>
      <div>
        <label for="inputField">Maxværdi: </label>
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
          value={"Opdater"}
        ></input>
      </div>
      <div>
        <label for="inputField">Minimumværdi: </label>
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
          value={"Opdater"}
        ></input>
      </div>
    </div>
  );
}
