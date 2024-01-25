import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router";
import styled, { css } from "styled-components";
import { HiMenu, HiX } from "react-icons/hi";

import NavLink from "./NavLink";
import Logo from "../../ui/Logo";
import ButtonLink from "../../ui/ButtonLink";

import { useNavValues } from "./useNavValues";

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
      box-shadow: var(--shadow-md);
    `}

  ${(props) =>
    props.$scrolled === "false" &&
    css`
      background-color: transparent;
      height: 10rem;
      padding: 1rem 0;
      position: relative;
    `}
`;

const StyledNavbar = styled.nav`
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

const MobileNav = styled.div`
  position: relative;

  background-color: rgba(255, 255, 255, 0.9);

  height: 100vh;
  width: 70%;
  z-index: 30;
  margin-left: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease-in;

  @media (max-width: 32em) {
    width: 85%;
  }

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
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @media (max-width: 32em) {
      padding: 0 2rem;
    }
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;

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
    fill: ${(props) => (props.open ? "transparent" : "var(--color-brand-600)")};
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

function Navbar({ page }) {
  const pageLowerCase = page.toLowerCase();
  const navRef = useRef();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { navbarLinks, isScrolled, setIsScrolled } =
    useNavValues(pageLowerCase);

  function handleMobileNav() {
    setIsOpen((open) => !open);
  }

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
      observer.observe(
        document.getElementById(
          `${pageLowerCase === "home" ? "hero" : "sub-header"}`
        )
      );
    },
    [setIsScrolled, pageLowerCase]
  );

  return (
    <Header ref={navRef} $scrolled={isScrolled ? "true" : "false"}>
      <StyledNavbar>
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
                {navbarLinks.map((link) => (
                  <NavLink
                    page={pageLowerCase}
                    handleClick={handleMobileNav}
                    open={isOpen}
                    linkTo={link.linkTo}
                    name={link.name}
                    key={link.id}
                  />
                ))}
                {(pageLowerCase === "home" || pageLowerCase === "about") && (
                  <li style={{ marginTop: "1.6rem" }}>
                    <ButtonLink
                      onClick={handleMobileNav}
                      to="/report-form"
                      size="xl"
                      $variation="primary"
                    >
                      Report Now
                    </ButtonLink>
                  </li>
                )}
                {pageLowerCase === "report form" && (
                  <li style={{ marginTop: "1.6rem" }}>
                    <ButtonLink
                      onClick={handleMobileNav}
                      to="/home"
                      size="xl"
                      $variation="primary"
                    >
                      Back to Home
                    </ButtonLink>
                  </li>
                )}
              </MobileNavList>
            </MobileNav>
          </Overlay>,
          document.body
        )}

        <NavList>
          {navbarLinks.map((link) => (
            <NavLink
              page={pageLowerCase}
              linkTo={link.linkTo}
              name={link.name}
              key={link.id}
            />
          ))}
          <li>
            {pageLowerCase === "home" && (
              <ButtonLink to="/login" size="large" $variation="primary">
                Authorized Login
              </ButtonLink>
            )}
            {pageLowerCase === "about" && (
              <ButtonLink to="/report-form" size="large" $variation="primary">
                Report Now
              </ButtonLink>
            )}
          </li>
        </NavList>
      </StyledNavbar>
    </Header>
  );
}

export default Navbar;
