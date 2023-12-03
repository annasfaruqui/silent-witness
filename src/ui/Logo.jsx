import { useDarkMode } from "../context/DarkModeContext";
import styles from "./Logo.module.css";

function Logo() {
  const { darkMode } = useDarkMode();

  const logoImg = darkMode ? "/logo-dark-mode.png" : "/logo-light-mode.png";

  return (
    <div className={styles.logoContainer}>
      <img src={logoImg} alt="logo" />
    </div>
  );
}

export default Logo;
