import styled from "styled-components";

const PageArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12rem;

  margin-top: 15rem;
  margin-bottom: 15rem;

  @media (max-width: 75em) {
    margin-top: 10rem;
    margin-bottom: 10rem;
  }

  @media (max-width: 32em) {
    margin-top: 7rem;
    margin-bottom: 7rem;
  }
`;

export default PageArticle;
