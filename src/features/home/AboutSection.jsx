import styled from "styled-components";
import { HiArrowRight } from "react-icons/hi2";

import Container from "../../ui/Container";
import HeadingGroup from "../../ui/HeadingGroup";
import Introduction from "../../ui/Introduction";

import { statements_data as statementsData } from "../../assets/data/data-statements";
import ButtonWithArrowLink from "../../ui/ButtonWithArrowLink";

const StatementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  align-items: stretch;
  justify-items: center;
  gap: 3rem;

  margin-top: 5rem;
`;

const Statement = styled.div`
  padding: 2rem;
  background-color: var(--color-brand-100);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);

  display: flex;
  flex-direction: column;
  gap: 2rem;

  transition: all 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
  }

  & div {
    display: flex;
    align-items: center;
    gap: 2rem;

    & span {
      padding: 1rem;
      border-radius: 50%;
      background-color: var(--color-grey-0);

      display: flex;
      align-items: center;
      justify-content: center;

      & svg {
        width: 3rem;
        height: 3rem;
        fill: var(--color-brand-600);
      }
    }

    & h5 {
      font-size: var(--font-xl);
      font-weight: 700;
      color: var(--color-grey-600);
    }
  }

  & p {
    grid-column: 1/-1;
    font-size: var(--font-lg);
    line-height: 1.8;
    align-self: start;
  }
`;

function AboutSection() {
  return (
    <section id="about">
      <Container>
        <HeadingGroup
          heading="About us"
          subHeading="Who we are and our commitment in the fight against drug trafficking"
        />

        <Introduction>
          We are a dedicated team committed to fostering safer and more
          resilient communities. Recognizing the urgent need to combat the
          menace of illegal drug trafficking, We have built a secure and
          confidential platform empowering individuals to report suspicious
          activities anonymously. We believe in the power of community
          engagement and education to create a lasting impact, and we invite you
          to join us in building a world where every member can thrive free from
          the harms of drug trafficking. Our commitment lies in ensuring your
          safety while actively contributing to the collective effort against
          illicit drug trade.
        </Introduction>
        <ButtonWithArrowLink
          to="/about"
          gap="1"
          $variation="primary"
          size="large"
        >
          Learn More
          <span>
            <HiArrowRight />
          </span>
        </ButtonWithArrowLink>

        <StatementGrid>
          {statementsData.map((statement) => (
            <Statement key={statement.id}>
              <div>
                <span>
                  <statement.icon />
                </span>
                <h5>{statement.heading}</h5>
              </div>
              <p>{statement.description}</p>
            </Statement>
          ))}
        </StatementGrid>
      </Container>
    </section>
  );
}

export default AboutSection;
