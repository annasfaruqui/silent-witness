import styled from "styled-components";

import HeadingGroup from "../../ui/HeadingGroup";
import Introduction from "../../ui/Introduction";
import Testimonial from "../../ui/Testimonial";
import ButtonLink from "../../ui/ButtonLink";

import { testimonials_data as testimonialsData } from "../../assets/data/data-testimonials";

const TestimonialsGrid = styled.div`
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
`;

const JoinUs = styled.div`
  margin: 0 5px;
  margin-top: 6rem;
  padding: 4rem 4.2rem;
  background-color: var(--color-brand-100);
  border: 1px solid var(--color-brand-600);
  border-radius: var(--border-radius-lg);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 56em) {
    padding: 3rem 3.6rem;
  }

  @media (max-width: 32em) {
    padding: 3rem 3.6rem;
  }

  & h5 {
    font-size: 4.5rem;
    font-weight: 800;
    color: var(--color-brand-600);
    text-transform: capitalize;
    word-spacing: 0.5rem;

    @media (max-width: 75em) {
      font-size: 4rem;
    }

    @media (max-width: 56em) {
      font-size: 3.5rem;
    }

    @media (max-width: 32em) {
      font-size: 3rem;
      font-weight: 700;
      text-align: left;
    }
  }

  & p {
    font-size: var(--font-lg);
    line-height: 1.6;
    hyphens: none;
    margin-bottom: 2rem;
    font-weight: 500;
  }
`;

function CommunityImpact() {
  return (
    <section id="community-impact">
      <HeadingGroup
        heading="Community impact"
        subHeading="Positive impacts and success stories resulting from the anonymous reporting on our platform"
      />
      <Introduction>
        Since the inception of Silent Witness, the impact on communities has
        been profound. Our commitment to providing a secure and anonymous
        platform for reporting illegal drug trafficking has catalyzed positive
        change and community engagement. Witnessing the active participation of
        individuals in the reporting process has been a testament to the
        strength of community collaboration. Users, driven by a shared sense of
        responsibility, have played a crucial role in building a safer
        environment.
      </Introduction>
      <Introduction>
        The collective efforts of our community have extended beyond reporting.
        Engaged individuals have become advocates for change, raising awareness
        about the consequences of illegal drug activities and advocating for a
        drug-free society. Through the combined efforts of our users,
        partnerships with law enforcement, and the advocacy initiatives
        facilitated by our platform, we've seen tangible outcomes. Reported
        incidents have been addressed, and the ripple effect of community
        awareness continues to contribute to a safer and healthier society.
      </Introduction>
      <Introduction>
        Here are some words from members of our community who have experienced
        the impact firsthand:
      </Introduction>
      <TestimonialsGrid>
        {testimonialsData.map((testimonial) => (
          <Testimonial key={testimonial.id} testimonial={testimonial} />
        ))}
      </TestimonialsGrid>
      <JoinUs>
        <h5>Join us in making a difference</h5>
        <p>
          Every report, every voice, and every act of advocacy contribute to the
          positive impact we aim to achieve. Together, let's continue making a
          difference in the fight against illegal drug trafficking. If you have
          any knowledge regarding any drug trafficking activity taking place in
          your surroundings, like somewhere around your workplace, or in your
          neighbourhood, or any place you frequently go to or pass by, Please
          take a stand for a drug-free land, and report that case on our
          platform without any fear of your identity being revealed to anyone.
        </p>
        <ButtonLink to="/report-form" size="large">
          Report Now
        </ButtonLink>
      </JoinUs>
    </section>
  );
}

export default CommunityImpact;
