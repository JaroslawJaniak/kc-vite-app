import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <menu className={`${styles.headerContainer} ${styles.stickyHeader}`}>
      <h2 className={styles.glow}>Kryształy Czasu - ReactApp - Vite</h2>
      
        <ul>
          <li>
            {" "}
            <Link to="/" className={styles.headerLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/chapter1" className={styles.headerLink}>
              chapter1
            </Link>
          </li>
          <li>
            <Link to="/chapter2" className={styles.headerLink}>
              chapter2
            </Link>
          </li>
          <li></li>
        </ul>
      
    </menu>
  );
};

export default Header;
