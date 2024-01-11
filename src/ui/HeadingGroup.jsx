import styled, { css } from "styled-components";

const StyledHeadingGroup = styled.hgroup`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${(props) =>
    props.center === "true" &&
    css`
      text-align: center;
    `}

  & h3 {
    color: var(--color-brand-600);
    font-size: 2rem;
    font-weight: 800;
    text-transform: uppercase;

    @media (max-width: 56em) {
      font-size: var(--font-lg);
    }

    @media (max-width: 32em) {
      font-size: var(--font-md);
    }
  }

  & h4 {
    color: var(--color-grey-600);
    font-size: var(--font-3xl);
    font-weight: 700;

    @media (max-width: 56em) {
      font-size: 3.8rem;
    }

    @media (max-width: 32em) {
      font-size: 3rem;
    }
  }
`;

function HeadingGroup({ heading, subHeading, textCenter }) {
  return (
    <StyledHeadingGroup center={textCenter ? "true" : "false"}>
      <h3>{heading}</h3>
      <h4>{subHeading}</h4>
    </StyledHeadingGroup>
  );
}

export default HeadingGroup;
