import MainNav from "./MainNav";
import styles from "./PageHeader.module.css";

function PageHeader({ location }) {
  return (
    <header className={styles.pageHeader}>
      <MainNav />
      <div>
        <h1>{location.toUpperCase()}</h1>
        <h2>HOME / {location.toUpperCase()}</h2>
      </div>
    </header>
  );
}

export default PageHeader;
