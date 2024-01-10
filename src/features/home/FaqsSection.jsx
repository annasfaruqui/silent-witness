import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa6";
import styles from "./FaqsSection.module.css";

import Container from "../../ui/Container";
import HeadingGroup from "../../ui/HeadingGroup";

import { faqs_data as faqsData } from "../../assets/data/data-faqs";
import { useState } from "react";

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
      className={isOpen ? styles.open : ""}
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
