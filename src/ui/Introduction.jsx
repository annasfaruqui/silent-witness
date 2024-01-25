import styled from "styled-components";

const Introduction = styled.p`
  font-size: var(--font-lg);
  font-weight: 400;
  line-height: 1.8;
  color: ${(props) => (props.color ? props.color : "var(--color-grey-700)")};

  margin-top: ${(props) => props.$mt}rem;
  margin-bottom: ${(props) => props.$mb}rem;
`;

Introduction.defaultProps = {
  $mt: 3,
  $mb: 3,
};

export default Introduction;
