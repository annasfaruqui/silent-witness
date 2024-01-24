import PageArticle from "../../ui/PageArticle";
import Footer from "../../ui/Footer";

import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import HowToReportSection from "./HowToReportSection";
import OperationsSection from "./OperationsSection";
import FeaturesSection from "./FeaturesSection";
import FaqsSection from "./FaqsSection";

function HomeLayout() {
  return (
    <>
      <main>
        <HeroSection />
        <PageArticle>
          <AboutSection />
          <HowToReportSection />
          <OperationsSection />
          <FeaturesSection />
          <FaqsSection />
        </PageArticle>
      </main>
      <Footer />
    </>
  );
}

export default HomeLayout;
