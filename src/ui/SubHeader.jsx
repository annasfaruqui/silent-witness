import { useLocation } from "react-router";
import styled, { css } from "styled-components";
import SubNav from "./SubNav";

import { useSubPagesScroll } from "../contexts/SubPagesScrollContext";
import { capitalizeFirstLetter } from "../utils/capitalizer";
import subHeroImg from "../assets/images/hero-section/sub-hero-image.jpg";

const StyledSubHeader = styled.section`
  background-image: linear-gradient(
      to bottom,
      rgba(205, 221, 255, 0.65),
      rgba(205, 221, 255, 0.65)
    ),
    url(${subHeroImg});
  background-size: cover;
  background-position: center;

  height: 40rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 56em) {
    height: 35rem;
  }

  ${(props) =>
    props.$scrolled === "false" &&
    css`
      position: relative;
    `}

  ${(props) =>
    props.$scrolled === "true" &&
    css`
      position: static;
    `}
`;

const PageInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30rem;

  @media (max-width: 56em) {
    height: 25rem;
  }

  & div {
    margin: 1rem;
    width: 100%;
    max-width: 150rem;
    padding: 0 8rem;
    transform: translateY(-50%);

    & h1 {
      font-size: 3.6rem;
      color: var(--color-brand-900);
    }

    & h2 {
      font-size: var(--font-xl);
      color: var(--color-grey-600);
    }

    @media (max-width: 81em) {
      padding: 0 2rem;
    }

    @media (max-width: 32em) {
      h1 {
        font-size: 3rem;
      }
      h2 {
        font-size: 2.4rem;
        color: var(--color-grey-700);
      }
    }
  }
`;

function SubHeader() {
  const { isScrolled } = useSubPagesScroll();
  const location = useLocation();
  const page = location.pathname
    .slice(1)
    .split("-")
    .map((entry) => capitalizeFirstLetter(entry))
    .join(" ");

  return (
    <StyledSubHeader id="sub-header" $scrolled={isScrolled ? "true" : "false"}>
      <SubNav page={page} />
      <PageInfo>
        <div>
          <h1>{page} Page</h1>
          <h2>Home / {page}</h2>
        </div>
      </PageInfo>
    </StyledSubHeader>
  );
}

export default SubHeader;
