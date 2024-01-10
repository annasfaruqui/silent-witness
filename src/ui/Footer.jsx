import styled from "styled-components";
import Logo from "./Logo";

const StyledFooter = styled.footer`
  background-color: var(--color-grey-900);
`;

const InnerDiv = styled.div`
  width: 100%;
  max-width: 150rem;
  margin: 0 auto;
  padding: 9rem 5rem 6rem;
  color: var(--color-grey-400);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6rem;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  & li {
    font-size: var(--font-lg);
    color: var(--color-grey-400);
  }
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Copyright = styled.p`
  font-size: var(--font-md);
  text-align: center;

  & strong {
    color: var(--color-grey-300);
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <InnerDiv>
        <nav>
          <NavList>
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </NavList>
        </nav>
        <LogoBox>
          <Logo />
        </LogoBox>
        <Copyright>
          Copyright &copy; 2024 by <strong>Silent Witness,Inc.</strong>
          &nbsp;All right reserved
        </Copyright>
      </InnerDiv>
    </StyledFooter>
  );
}

export default Footer;
