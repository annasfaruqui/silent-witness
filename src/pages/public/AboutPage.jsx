import PageArticle from "../../ui/PageArticle";
import Intro from "../../features/about/Intro";
import VisionMission from "../../features/about/VisionMission";
import Background from "../../features/about/Background";
import CommunityImpact from "../../features/about/CommunityImpact";

import { useScrollToTop } from "../../hooks/useScrollToTop";

function AboutPage() {
  useScrollToTop();

  return (
    <PageArticle>
      <Intro />
      <VisionMission />
      <Background />
      <CommunityImpact />
    </PageArticle>
  );
}

export default AboutPage;
