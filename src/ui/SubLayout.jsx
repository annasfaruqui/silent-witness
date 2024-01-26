import { Outlet } from "react-router";

import SubHeader from "./SubHeader";
import Container from "./Container";
import Footer from "./Footer";
import TeamFooter from "./TeamFooter";

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
      <TeamFooter />
    </>
  );
}

export default SubLayout;
