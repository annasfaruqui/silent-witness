import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import styled, { css } from "styled-components";

import Logo from "./Logo";
import ButtonLink from "./ButtonLink";

import { useHomeScroll } from "../contexts/HomeScrollContext";
import { homeNavlinks_data as homeNavbarLinks } from "../assets/data/data-navlinks";
import { useNavigate } from "react-router";

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
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(5px);
      z-index: 10;
      box-shadow: var(--shadow-md);
    `}

  ${(props) =>
    props.$scrolled === "false" &&
    css`
      background-color: var(--color-brand-100);
      height: 10rem;
      padding: 1rem 0;
      position: relative;
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

const StyledLink = styled(Link)`
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

function NavLink({ linkTo, name }) {
  return (
    <li>
      <StyledLink
        to={linkTo}
        spy={true}
        smooth={true}
        offset={-120}
        duration={500}
      >
        {name}
      </StyledLink>
    </li>
  );
}

function HomeNav() {
  const navRef = useRef();
  const navigate = useNavigate();
  const { isScrolled, setIsScrolled } = useHomeScroll();

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
          rootMargin: "-100px",
        }
      );
      observer.observe(document.getElementById("hero"));
    },
    [setIsScrolled]
  );

  return (
    <Header ref={navRef} $scrolled={isScrolled ? "true" : "false"}>
      <NavBar>
        <LogoBox onClick={() => navigate("/home", { replace: true })}>
          <Logo />
        </LogoBox>

        <NavList>
          {homeNavbarLinks.map((link) => (
            <NavLink linkTo={link.linkTo} name={link.name} key={link.id} />
          ))}
          <li>
            <ButtonLink to="/login" size="large" variation="primary">
              Authorized Login
            </ButtonLink>
          </li>
        </NavList>
      </NavBar>
    </Header>
  );
}

export default HomeNav;