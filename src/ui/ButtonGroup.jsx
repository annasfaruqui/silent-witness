import styled from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.4rem;
  /* width: 100%; */

  &:first-child {
    flex-grow: 1;
  }
  &:last-child {
    flex-grow: 1;
  }
`;

export default ButtonGroup;
