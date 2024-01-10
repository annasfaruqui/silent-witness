import styled, { css } from "styled-components";

const Heading = styled.h1`
  line-height: 1.4;
  color: ${(props) => (props.color ? props.color : "var(--color-grey-700)")};

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2.2rem;
      font-weight: 600;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 2.4rem;
      font-weight: 500;
      color: ${(props) =>
        props.color ? props.color : "var(--color-grey-600)"};
      margin-bottom: 1rem;
    `}
`;

export default Heading;
