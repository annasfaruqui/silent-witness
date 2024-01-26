import HomeLayout from "../../features/home/HomeLayout";

import { useScrollToTop } from "../../hooks/useScrollToTop";

function HomePage() {
  useScrollToTop();

  return <HomeLayout />;
}

export default HomePage;
