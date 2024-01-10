import { useLocation } from "react-router";
import styled, { css } from "styled-components";
import SubNav from "./SubNav";

import { useSubPagesScroll } from "../contexts/SubPagesScrollContext";
import { capitalizeFirstLetter } from "../utils/capitalizer";
import subHeroImg from "../assets/images/hero-section/sub-hero-image.jpg";

const StyledSubHeader = styled.section`
  background-image: linear-gradient(
      to bottom,
      rgba(194, 221, 255, 0.65),
      rgba(194, 221, 255, 0.65)
    ),
    url(${subHeroImg});
  background-size: cover;
  background-position: center;

  height: 40rem;
  padding: 18rem 9rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;

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

  & h1 {
    font-size: 3.6rem;
    color: var(--color-brand-900);
  }

  & h2 {
    font-size: var(--font-xl);
    color: var(--color-grey-600);
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
      <div>
        <h1>{page} Page</h1>
        <h2>Home / {page}</h2>
      </div>
    </StyledSubHeader>
  );
}

export default SubHeader;
