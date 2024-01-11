import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 140rem;
  padding: 0 10rem;
  margin: 0 auto;

  @media (max-width: 75em) {
    padding: 0 5rem;
  }

  @media (max-width: 56em) {
    padding: 0 3.5rem;
  }
`;

export default Container;
