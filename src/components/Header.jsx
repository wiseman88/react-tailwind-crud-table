import { NavLink } from "react-router-dom";
import styles from "../styles/styles.module.css";

const Header = () => {
  return (
    <header className="bg-black">
      <nav className={styles.navigation}>
        <img src="/vite.svg" alt="vite logo" />
        <ul className={styles.list}>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="about">about</NavLink>
          </li>
          <li>
            <NavLink to="contact">contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
