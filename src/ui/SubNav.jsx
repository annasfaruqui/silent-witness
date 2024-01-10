import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-scroll";
import styled, { css } from "styled-components";

import Logo from "./Logo";
import ButtonLink from "./ButtonLink";

import { useSubPagesScroll } from "../contexts/SubPagesScrollContext";
import { aboutNavlinks_data as aboutNavbarLinks } from "../assets/data/data-navlinks";
import { formNavlinks_data as formNavbarLinks } from "../assets/data/data-navlinks";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  ${(props) =>
    props.$scrolled === "true" &&
    css`
      height: 10rem;
      padding: 0;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(5px);
      z-index: 10;
      box-shadow: var(--shadow-md);
    `}

  ${(props) =>
    props.$scrolled === "false" &&
    css`
      background-color: transparent;
      height: 10rem;
      padding: 1rem 0;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    `}
`;

const NavBar = styled.nav`
  width: 100%;
  max-width: 150rem;
  margin: 0 auto;
  padding: 1.2rem 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoBox = styled.div`
  width: 25rem;
  height: 100%;
  cursor: pointer;
`;

const NavList = styled.ul`
  padding: 1.2rem 0.8rem;
  border-radius: var(--border-radius-lg);

  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledScrollLink = styled(Link)`
  color: var(--color-grey-800);
  font-size: 2rem;
  font-weight: 600;
  padding: 1rem 1.2rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover,
  &:active {
    color: var(--color-brand-700);
    border-radius: var(--border-radius-sm);
  }
`;

function NavScrollLink({ linkTo, name, form }) {
  return (
    <li>
      <StyledScrollLink
        to={linkTo}
        spy={true}
        smooth={true}
        offset={!form ? -120 : -260}
        duration={500}
      >
        {name}
      </StyledScrollLink>
    </li>
  );
}

function SubNav({ page }) {
  const navRef = useRef();
  const navigate = useNavigate();
  const { isScrolled, setIsScrolled } = useSubPagesScroll();

  useEffect(
    function () {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];

          if (entry.isIntersecting === false) {
            setIsScrolled(true);
          }

          if (entry.isIntersecting === true) {
            setIsScrolled(false);
          }
        },
        {
          //In the viewport
          root: null,
          threshold: 0,
          rootMargin: "-90px",
        }
      );
      observer.observe(document.getElementById("sub-header"));
    },
    [setIsScrolled]
  );

  return (
    <Header ref={navRef} $scrolled={isScrolled ? "true" : "false"}>
      <NavBar>
        <LogoBox onClick={() => navigate("/home")}>
          <Logo />
        </LogoBox>
        <NavList>
          {page.toLowerCase() === "report form" &&
            formNavbarLinks.map((link) => (
              <NavScrollLink
                form={true}
                key={link.id}
                name={link.name}
                linkTo={link.linkTo}
              />
            ))}
          {page.toLowerCase() === "about" &&
            aboutNavbarLinks.map((link) => (
              <NavScrollLink
                key={link.id}
                name={link.name}
                linkTo={link.linkTo}
              />
            ))}
          {page.toLowerCase() === "about" && (
            <li>
              <ButtonLink to="/report-form" size="large" variation="primary">
                Report Now
              </ButtonLink>
            </li>
          )}
        </NavList>
      </NavBar>
    </Header>
  );
}

export default SubNav;
