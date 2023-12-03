import { NavLink } from "react-router-dom";

import styles from "./MainNav.module.css";

import Logo from "./Logo";
import ToggleDarkModeButton from "./ToggleDarkModeButton";

function MainNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul className={styles.navList}>
        <li>
          <ToggleDarkModeButton />
        </li>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
