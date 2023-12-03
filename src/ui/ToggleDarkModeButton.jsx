import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

import styles from "./ToggleDarkModeButton.module.css";
import { useDarkMode } from "../context/DarkModeContext";

function ToggleDarkModeButton() {
  const { darkMode, toggleTheme } = useDarkMode();

  return (
    <button onClick={toggleTheme} className={styles.button}>
      {darkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
    </button>
  );
}

export default ToggleDarkModeButton;
