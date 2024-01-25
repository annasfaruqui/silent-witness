import styled from "styled-components";
import { HiArrowRight } from "react-icons/hi2";

import Container from "../../ui/Container";
import HeadingGroup from "../../ui/HeadingGroup";
import Introduction from "../../ui/Introduction";
import ButtonWithArrowLink from "../../ui/ButtonWithArrowLink";

import { howToReport_data as stepsData } from "../../assets/data/data-how-to-report";

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, max-content));
  column-gap: 4rem;
  row-gap: 5rem;

  margin: 5rem 0;
`;

const StyledStep = styled.div`
  display: grid;
  grid-template-rows: 20rem repeat(2, min-content);

  background-color: var(--color-grey-0);
  border: 1px solid var(--color-brand-200);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
  }

  & figure {
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & div {
    padding-bottom: 2rem;

    & h5 {
      font-size: 2rem;
      text-transform: uppercase;
      text-align: center;
      padding: 1rem;

      color: var(--color-brand-800);
      background-color: var(--color-brand-200);
      border-top: 1px solid var(--color-brand-400);

      & strong {
        font-weight: 800;
        margin-right: 5px;
      }
    }

    & p {
      font-size: var(--font-lg);
      color: var(--color-grey-700);
      hyphens: none;
      line-height: 1.5;

      padding: 2rem;
    }
  }
`;

function Step({ step }) {
  return (
    <StyledStep>
      <figure>
        <img src={step.image} alt={step.stepHeading} />
      </figure>
      <div>
        <h5>
          <strong>{step.stepNumber.toString().padStart(2, "0")}</strong>
          &nbsp;
          {step.stepHeading}
        </h5>
        <p>{step.stepDescripton}</p>
      </div>
    </StyledStep>
  );
}

function HowToReportSection() {
  return (
    <section id="how-to-report">
      <Container>
        <HeadingGroup
          heading="How to report"
          subHeading="A step-by-step guide on how to report illegal drug trafficking"
        />

        <StepsGrid>
          {stepsData.map((step) => (
            <Step key={step.id} step={step} />
          ))}
        </StepsGrid>

        <Introduction>
          Empowered with the knowledge of our secure and anonymous reporting
          process, you are now equipped to be a catalyst for positive change. By
          following these simple steps, you contribute to the ongoing effort to
          combat illegal drug trafficking and enhance community safety. Your
          voice matters, and your reports make a significant impact. Ready to
          take action? Click the button below, and together, let's forge a path
          toward a safer and stronger community.
        </Introduction>
        <ButtonWithArrowLink
          to="/report-form"
          gap="1"
          size="large"
          $variation="primary"
        >
          Go to Report Form
          <span>
            <HiArrowRight />
          </span>
        </ButtonWithArrowLink>
        <Introduction $$mb="0">
          Your vigilance and commitment to community safety are invaluable. By
          reporting illegal drug trafficking activities, you play a pivotal role
          in fostering a secure environment for everyone. Your commitment to
          community safety is commendable, and your reports play a crucial role
          in fostering a secure environment for all. Together, we make a
          difference. Your actions contribute to a collective effort that aims
          to create a community free from the harm of illicit drug activities.
          Thank you for being an active participant in the collective effort to
          combat illicit activities and build a safer, stronger community.
        </Introduction>
      </Container>
    </section>
  );
}

export default HowToReportSection;
