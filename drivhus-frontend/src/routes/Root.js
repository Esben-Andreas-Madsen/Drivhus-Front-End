import styles from "./root.module.css";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div>
        <ul className={styles.navbar}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tempgraph">TempGraph</Link>
          </li>
          <li>
            <Link to="/humigraph">HumiGraph</Link>
          </li>
          <li>
            <Link to="/co2graph">CO2Graph</Link>
          </li>
          <li>
            <Link to="/boundaryvalue">BoundaryValue</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
