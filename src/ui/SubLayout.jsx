import { Outlet } from "react-router";

import SubHeader from "./SubHeader";
import Container from "./Container";
import Footer from "./Footer";

import { SubPagesScrollProvider } from "../contexts/SubPagesScrollContext";

function SubLayout() {
  return (
    <SubPagesScrollProvider>
      <SubHeader />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </SubPagesScrollProvider>
  );
}

export default SubLayout;
