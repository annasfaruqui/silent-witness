import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import styled, { css } from "styled-components";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

import Logo from "./Logo";
import ButtonLink from "./ButtonLink";

import { useHomeScroll } from "../contexts/HomeScrollContext";
import { homeNavlinks_data as homeNavbarLinks } from "../assets/data/data-navlinks";
import { createPortal } from "react-dom";

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
      background-color: rgba(255, 255, 255, 0.9);
      z-index: 20;
      /* box-shadow: var(--shadow-md); */
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

  @media (max-width: 81em) {
    padding: 1.2rem 2rem;
  }

  @media (max-width: 75em) {
    position: relative;
  }
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

  @media (max-width: 75em) {
    display: none;
  }
`;

const MobileNavButton = styled.button`
  background: none;
  border: none;
  border-radius: 50%;
  padding: ${(props) => (props.open ? 0 : "1rem")};
  display: flex;
  align-items: center;
  justify-content: center;

  display: none;

  &:focus {
    outline: none;
  }

  & svg {
    height: ${(props) => (props.open ? 0 : "4.5rem")};
    width: ${(props) => (props.open ? 0 : "4.5rem")};
    fill: ${(props) => (props.open ? "transparent" : "var(--color-brand-700)")};
  }

  @media (max-width: 75em) {
    display: block;
    position: absolute;
    top: 50%;
    right: 2%;
    z-index: 1000;
    transform: translateY(-50%);
  }
`;

const MobileNavCloseButton = styled(MobileNavButton)`
  position: absolute;
  top: 5rem;
  right: 2rem;

  & svg {
    height: 4.5rem;
    width: 4.5rem;
  }
`;

const MobileNav = styled.div`
  position: relative;

  background-color: rgba(255, 255, 255, 0.95);

  height: 100svh;
  width: 70%;
  z-index: 30;
  margin-left: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease-in;

  ${(props) =>
    props.$open === "false" &&
    css`
      opacity: 0;
      pointer-events: none;
      visibility: hidden;

      transform: translateX(100%);
    `}

  ${(props) =>
    props.$open === "true" &&
    css`
      opacity: 1;
      pointer-events: auto;
      visibility: visible;

      transform: translateX(0);
    `}
`;

const MobileNavList = styled.ul`
  display: none;

  @media (max-width: 75em) {
    height: 100%;
    padding: 0 4rem;
    width: 100%;
    z-index: 30;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100svh;

  overflow: hidden;

  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 25;
  transition: all 0.5s;

  position: fixed;
  top: 0;
  left: 0;

  ${(props) =>
    props.$open === "false" &&
    css`
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    `}

  ${(props) =>
    props.$open === "true" &&
    css`
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    `}
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
  const [isOpen, setIsOpen] = useState(false);
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

  function handleMobileNav() {
    setIsOpen((open) => !open);
  }

  return (
    <Header ref={navRef} $scrolled={isScrolled ? "true" : "false"}>
      <NavBar>
        <LogoBox onClick={() => navigate("/home", { replace: true })}>
          <Logo />
        </LogoBox>

        <MobileNavButton onClick={handleMobileNav} open={isOpen}>
          {isOpen ? <HiX /> : <HiMenu />}
        </MobileNavButton>

        {createPortal(
          <Overlay $open={isOpen ? "true" : "false"}>
            <MobileNav $open={isOpen ? "true" : "false"}>
              <MobileNavCloseButton onClick={handleMobileNav}>
                {isOpen ? <HiX /> : <HiMenu />}
              </MobileNavCloseButton>
              <MobileNavList>
                <li>Home</li>
                <li>How to report</li>
                <li>Operations</li>
                <li>Features</li>
                <li>FAQs</li>
              </MobileNavList>
            </MobileNav>
          </Overlay>,
          document.body
        )}

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
