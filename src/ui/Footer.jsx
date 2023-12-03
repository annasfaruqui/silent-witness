import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <h1>Footer</h1>
      <h2 style={{ backgroundColor: "red" }}>Column2</h2>
      <h2 style={{ backgroundColor: "red" }}>Column3</h2>
      <h2 style={{ backgroundColor: "red" }}>Column4</h2>
    </footer>
  );
}

export default Footer;
