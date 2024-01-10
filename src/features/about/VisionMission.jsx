import styled, { css } from "styled-components";
import HeadingGroup from "../../ui/HeadingGroup";

import { statements_data as statementsData } from "../../assets/data/data-statements";
import { values_data as valuesData } from "../../assets/data/data-our-values";

import Introduction from "../../ui/Introduction";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  column-gap: 2rem;
  row-gap: 2.6rem;
  margin-top: 4rem;
`;

const StyledStatement = styled.div`
  display: grid;
  padding: 2rem;
  background-color: var(--color-brand-100);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s;
  align-items: center;

  &:hover {
    transform: translateY(-1rem);
    box-shadow: var(--shadow-lg);
  }

  ${(props) =>
    props.icon === "true" &&
    css`
      grid-template-columns: 5rem 1fr;
      gap: 2rem;

      & h5 {
        align-self: center;
        font-size: var(--font-2xl);
        color: var(--color-grey-600);
      }

      & span {
        background-color: var(--color-grey-0);
        height: 5rem;
        width: 5rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        & svg {
          height: 3rem;
          width: 3rem;
          fill: var(--color-brand-600);
        }
      }

      & p {
        grid-column: 1/-1;
        font-size: var(--font-lg);
        line-height: 1.6;
        hyphens: none;
      }
    `}

  ${(props) =>
    props.icon === "false" &&
    css`
      grid-template-rows: repeat(2, auto);
      align-items: start;
      gap: 1rem;

      & h5 {
        align-self: start;
        font-size: 2.3rem;
        color: var(--color-grey-600);
      }

      & p {
        align-self: start;
        font-size: var(--font-lg);
        line-height: 1.6;
        hyphens: none;
      }
    `}
`;

const SmallHeading = styled.h5`
  font-size: var(--font-xl);
  font-weight: 600;
  color: var(--color-brand-600);
  margin-bottom: -2rem;
`;

function Statement({ statement }) {
  return (
    <StyledStatement icon={statement.icon ? "true" : "false"}>
      {statement.icon && (
        <span>
          <statement.icon />
        </span>
      )}
      <h5>{statement.heading}</h5>
      <p>{statement.description}</p>
    </StyledStatement>
  );
}

function VisionMission() {
  return (
    <section id="vision-mission">
      <HeadingGroup
        heading="Vision and mission"
        subHeading="Focused on a safer tomorrow: Unveiling our vision and mission"
      />
      <Grid>
        {statementsData
          .filter((statement) => !(statement.id > 2))
          .map((statement) => (
            <Statement key={statement.id} statement={statement} />
          ))}
      </Grid>
      <Introduction>
        At Silent Witness, our mission is clear &mdash; to create safer and more
        resilient communities by providing a secure platform for anonymous
        reporting of illegal drug trafficking activities. We believe in the
        strength of community collaboration, and every report submitted plays a
        vital role in building a foundation of safety for all.
      </Introduction>
      <SmallHeading>Our Values</SmallHeading>
      <Grid>
        {valuesData.map((value) => (
          <Statement key={value.id} statement={value} />
        ))}
      </Grid>
    </section>
  );
}

export default VisionMission;
