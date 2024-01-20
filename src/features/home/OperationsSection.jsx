import styled from "styled-components";

import Container from "../../ui/Container";
import HeadingGroup from "../../ui/HeadingGroup";

import { operations_data as stepsData } from "../../assets/data/data-operations";

const Steps = styled.div`
  margin-top: 5rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media (max-width: 75em) {
    padding: 2rem 0;
  }

  @media (max-width: 75em) {
    padding: 2rem;
  }

  @media (max-width: 56em) {
    gap: 8rem;
  }

  @media (max-width: 32em) {
    padding: 1rem 0.8rem;
  }
`;

const StyledStep = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6rem;

  @media (max-width: 75em) {
    gap: 5rem;
  }

  @media (max-width: 56em) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const StepDetails = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;

  & h5 {
    font-size: var(--font-xl);
    color: var(--color-grey-700);
  }

  @media (max-width: 75em) {
    width: 120%;
  }

  @media (max-width: 56em) {
    width: 100%;
    gap: 5px;

    & h5 {
      font-size: 2.4rem;
    }
  }
`;

const StepNumber = styled.p`
  font-size: 6.4rem;
  font-weight: 800;
  color: var(--color-grey-500);

  @media (max-width: 56em) {
    font-size: 6rem;
  }

  @media (max-width: 32em) {
    font-size: 5rem;
  }
`;

const StepDescription = styled.p`
  font-size: var(--font-lg);
  line-height: 1.8;

  @media (max-width: 75em) {
    font-size: var(--font-md);
    line-height: 1.5;
    color: var(--color-grey-500);
  }
`;

const ImgBox = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    border-radius: var(--border-radius-lg);
  }
`;

function Step({ step }) {
  let imgPosition = step.id % 2 === 0 ? "left" : "right";

  if (window.innerWidth <= 896)
    return (
      <StyledStep>
        <StepDetails>
          <StepNumber>{step.stepNumber}</StepNumber>
          <h5>{step.name}</h5>
          <StepDescription>{step.description}</StepDescription>
        </StepDetails>
        <ImgBox>
          <img src={step.image} alt={step.name} />
        </ImgBox>
      </StyledStep>
    );

  if (window.innerWidth > 896) {
    if (imgPosition === "right")
      return (
        <StyledStep>
          <StepDetails>
            <StepNumber>{step.stepNumber}</StepNumber>
            <h5>{step.name}</h5>
            <StepDescription>{step.description}</StepDescription>
          </StepDetails>
          <ImgBox>
            <img src={step.image} alt={step.name} />
          </ImgBox>
        </StyledStep>
      );

    if (imgPosition === "left")
      return (
        <StyledStep>
          <ImgBox>
            <img src={step.image} alt={step.name} />
          </ImgBox>
          <StepDetails>
            <StepNumber>{step.stepNumber}</StepNumber>
            <h5>{step.name}</h5>
            <StepDescription>{step.description}</StepDescription>
          </StepDetails>
        </StyledStep>
      );
  }
}

function OperationsSection() {
  return (
    <section id="operations">
      <Container>
        <HeadingGroup
          heading="Operations"
          subHeading="How we operate with the help of anonymous reports"
        />
        <Steps>
          {stepsData.map((step) => (
            <Step step={step} key={step.id} />
          ))}
        </Steps>
      </Container>
    </section>
  );
}

export default OperationsSection;
