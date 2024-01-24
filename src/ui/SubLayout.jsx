import { Outlet } from "react-router";

import SubHeader from "./SubHeader";
import Container from "./Container";
import Footer from "./Footer";

function SubLayout() {
  return (
    <>
      <SubHeader />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default SubLayout;
