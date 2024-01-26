import styled from "styled-components";

import Container from "../../ui/Container";
import HeadingGroup from "../../ui/HeadingGroup";

import { features_data as featuresData } from "../../assets/data/data-features";

const FeaturesGrid = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));

  gap: 3rem;
`;

const Feature = styled.div`
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  border: 1px solid var(--color-brand-400);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  transition: all 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
  }

  & span {
    padding: 1rem;
    border-radius: 50%;
    background-color: var(--color-brand-200);

    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
      stroke: var(--color-brand-600);
      height: 3rem;
      width: 3rem;
    }
  }

  & h5 {
    font-size: var(--font-xl);
    color: var(--color-brand-800);
    text-align: center;
  }

  & p {
    font-size: var(--font-md);
    font-weight: 500;
    line-height: 1.5;
    color: var(--color-grey-600);
    text-align: center;

    max-width: 80%;
    margin: 0 auto;
  }
`;

function FeaturesSection() {
  return (
    <section id="features">
      <Container>
        <HeadingGroup
          heading="Features"
          subHeading="Everything you need to know about being able to report anonymously"
        />
        <FeaturesGrid>
          {featuresData.map((feature) => (
            <Feature key={feature.id}>
              <span>
                <feature.icon />
              </span>
              <h5>{feature.heading}</h5>
              <p>{feature.description}</p>
            </Feature>
          ))}
        </FeaturesGrid>
      </Container>
    </section>
  );
}

export default FeaturesSection;
