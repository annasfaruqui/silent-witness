import styles from "./Hero.module.css";
import MainNav from "./MainNav";

function Hero() {
  return (
    <header className={styles.hero}>
      <MainNav />
    </header>
  );
}

export default Hero;
