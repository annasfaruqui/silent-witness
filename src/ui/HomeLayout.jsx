import Hero from "./Hero";
import styles from "./HomeLayout.module.css";
import { Outlet, useLocation } from "react-router";
import PageHeader from "./PageHeader";
import Footer from "./Footer";

function HomeLayout() {
  const locationObject = useLocation();
  const location = locationObject.pathname.slice(1);

  return (
    <div className={styles.container}>
      {location === "home" ? <Hero /> : <PageHeader location={location} />}
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default HomeLayout;
