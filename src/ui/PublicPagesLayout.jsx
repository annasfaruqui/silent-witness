import { Outlet } from "react-router";

import { HomePageScrollProvider } from "../contexts/HomePageScrollContext";
import { AboutPageScrollProvider } from "../contexts/AboutPageScrollContext";
import { ReportFormPageScrollProvider } from "../contexts/ReportFormPageScrollContext";

function PublicPagesLayout() {
  return (
    <HomePageScrollProvider>
      <AboutPageScrollProvider>
        <ReportFormPageScrollProvider>
          <Outlet />
        </ReportFormPageScrollProvider>
      </AboutPageScrollProvider>
    </HomePageScrollProvider>
  );
}

export default PublicPagesLayout;
