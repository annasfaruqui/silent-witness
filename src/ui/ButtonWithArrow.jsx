import styled from "styled-components";
import Button from "./Button";

const ButtonWithArrow = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.gap}rem;
`;

export default ButtonWithArrow;
