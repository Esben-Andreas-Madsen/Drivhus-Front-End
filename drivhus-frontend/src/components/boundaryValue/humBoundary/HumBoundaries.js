import styles from "../boundaries.module.css";

export default function HumBoundaries() {
  return (
    <div className={styles.boundaryBox1}>
      <h2>Humidity</h2>
      <div>
        <label for="inputField">Maxværdi: </label>
        <input
          type="text"
          id="inputField"
          name="inputField"
          placeholder="%"
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
          placeholder="%"
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
