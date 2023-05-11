export default function Boundaries() {
  return (
    <div>
      <h2>Temperatur</h2>
      <div>
        <label for="inputField">Maxværdi: </label>
        <input
          type="text"
          id="inputField"
          name="inputField"
          placeholder="EX °45"
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
          placeholder="EX °45"
        ></input>
        <button
          type="button"
          name="submit"
          value="Submit"
          class="my-button-class"
          onclick="updateTemperature"
        >
          Opdater
        </button>
      </div>
    </div>
  );
}
