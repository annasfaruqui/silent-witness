import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const SpinnerMini = styled(BiLoaderAlt)`
  color: ${(props) =>
    props.danger === "true"
      ? "var(--color-red-100)"
      : "var(--color-brand-400)"};
  width: 2.4rem;
  height: 2.4rem;
  animation: ${rotate} 1.5s infinite linear;
`;

export default SpinnerMini;
