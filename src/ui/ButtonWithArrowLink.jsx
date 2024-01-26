import styled from "styled-components";

import ButtonLink from "./ButtonLink";

const ButtonWithArrowLink = styled(ButtonLink)`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.gap}rem;
`;

export default ButtonWithArrowLink;
