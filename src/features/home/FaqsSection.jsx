import { useState } from "react";
import styled, { css } from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa6";

import Container from "../../ui/Container";
import HeadingGroup from "../../ui/HeadingGroup";

import { faqs_data as faqsData } from "../../assets/data/data-faqs";

const StyledAccordion = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const StyledAccordionItem = styled.div`
  padding: 1rem 2rem;
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-lg);

  cursor: pointer;

  ${(props) =>
    props.$open === "true" &&
    css`
      border-top: 4px solid var(--color-brand-600);
      transition: all 0.1s;

      h5 {
        color: var(--color-brand-700) !important;
      }
    `}
`;

const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  & h5 {
    font-size: var(--font-xl);
    font-weight: 600;
    color: var(--color-grey-600);
    line-height: 1.5;
  }

  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 50%;

    & svg {
      width: 2rem;
      height: 2rem;
      fill: var(--color-brand-600);
    }
  }

  @media (max-width: 75em) {
    & h5 {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 56em) {
    gap: 1.8rem;

    & h5 {
      font-size: 2rem;
    }
  }

  @media (max-width: 32em) {
    gap: 0.5rem;

    & h5 {
      font-size: var(--font-lg);
      font-weight: 500;
    }

    & span {
      & svg {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  }
`;

const Answer = styled.div`
  padding-top: 2.4rem;
  padding-bottom: 1rem;

  & p {
    font-size: var(--font-lg);
    font-weight: 500;
    color: var(--color-grey-500);
    line-height: 1.5;
  }

  @media (max-width: 75em) {
    & p {
      font-size: var(--font-md);
    }
  }

  @media (max-width: 56em) {
    padding-top: 2rem;

    & p {
      color: var(--color-grey-600);
    }
  }

  @media (max-width: 32em) {
    padding-top: 1rem;

    & p {
      font-size: var(--font-sm);
    }
  }
`;

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <StyledAccordion>
      {data.map((el) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          num={el.id}
          question={el.question}
          key={el.id}
        >
          {el.answer}
        </AccordionItem>
      ))}
    </StyledAccordion>
  );
}

function AccordionItem({ num, curOpen, onOpen, question, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <StyledAccordionItem
      $open={isOpen ? "true" : "false"}
      onClick={handleToggle}
    >
      <Question>
        <h5>{question}</h5>
        <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
      </Question>
      {isOpen && (
        <Answer>
          <p>{children}</p>
        </Answer>
      )}
    </StyledAccordionItem>
  );
}

function FaqsSection() {
  return (
    <section id="faqs">
      <Container>
        <HeadingGroup
          heading="Frequently asked questions"
          subHeading="How can we help you?"
        />
        <Accordion data={faqsData} />
      </Container>
    </section>
  );
}

export default FaqsSection;
