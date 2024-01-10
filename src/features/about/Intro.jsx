import HeadingGroup from "../../ui/HeadingGroup";
import Introduction from "../../ui/Introduction";

function Intro() {
  return (
    <section id="intro">
      <HeadingGroup
        heading="About us"
        subHeading="Discover our purpose to community safety through anonymous reporting."
      />
      <Introduction marginBottom="0">
        We are a dedicated team committed to fostering safer and more resilient
        communities. Recognizing the urgent need to combat the menace of illegal
        drug trafficking, We have built a secure and confidential platform
        empowering individuals to report suspicious activities anonymously. We
        believe in the power of community engagement and education to create a
        lasting impact, and we invite you to join us in building a world where
        every member can thrive free from the harms of drug trafficking. Our
        commitment lies in ensuring your safety while actively contributing to
        the collective effort against illicit drug trade.
        <br />
        <br />
        At Silent Witness, we believe in the power of collective action to
        create safer and more secure communities. Our platform is dedicated to
        providing a safe space for individuals to anonymously report incidents
        of illegal drug trafficking, contributing to a united effort against
        this pervasive issue. As advocates for community well-being, we
        understand the critical role anonymity plays in empowering individuals
        to speak out without fear. Explore our About page to discover the story
        behind our mission, the faces driving change, and the impact our
        community is making in the fight against illicit drug activities.
        Together, let's build a safer future for us all.
      </Introduction>
    </section>
  );
}

export default Intro;
