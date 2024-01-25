import styled from "styled-components";
import Logo from "./Logo";
import { MdOutlineFacebook } from "react-icons/md";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { useNavigate } from "react-router";

const StyledFooter = styled.footer`
  background-color: var(--color-grey50);
  border-top: 1px solid var(--color-grey-400);
`;

const FooterGrid = styled.div`
  width: 100%;
  max-width: 130rem;
  margin: 0 auto;
  padding: 12rem 5rem;
  padding-bottom: 15rem;
  color: var(--color-grey-600);

  display: grid;
  grid-template-columns: 1.6fr 1.8fr repeat(2, 1.2fr);
  grid-template-rows: minmax(15rem, auto);
  column-gap: 2rem;

  @media (max-width: 81em) {
    column-gap: 1rem;
  }

  @media (max-width: 75em) {
    column-gap: 4rem;
    row-gap: 6rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 56em) {
    grid-template-columns: 1fr 3fr;
  }

  @media (max-width: 32em) {
    grid-template-columns: auto;
    grid-rows-columns: repeat(4, auto);
    row-gap: 4rem;
  }
`;

const Company = styled.div`
  padding: 0 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;

  @media (max-width: 75em) {
    grid-column: 1;
    grid-row: 1;
  }

  @media (max-width: 44em) {
    padding: 2rem 0;
  }

  @media (max-width: 32em) {
    gap: 1.2rem;
  }
`;

const LogoBox = styled.div`
  width: 25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  @media (max-width: 56em) {
    margin-left: -1rem;
    margin-right: 1rem;
  }

  @media (max-width: 44em) {
    width: 20rem;
  }

  @media (max-width: 32em) {
    width: 30rem;
    margin-right: 0;
  }

  @media (max-width: 21em) {
    width: 20rem;
  }
`;

const SocialLinks = styled.ul`
  margin-left: 1rem;
  margin-bottom: 2rem;

  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & li {
    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
      width: 2.75rem;
      height: 2.75rem;
      fill: var(--color-grey-600);
    }

    &:hover,
    &:active {
      & svg {
        fill: var(--color-brand-600);
      }
    }
  }

  @media (max-width: 56em) {
    margin: 0rem;
  }
`;

const Copyright = styled.p`
  padding: 0 1rem;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  line-height: 1.5;

  @media (max-width: 56em) {
    padding: 0;
    margin: 0;
  }
`;

const Address = styled.p`
  font-size: var(--font-md);
  margin-bottom: 2.4rem;

  @media (max-width: 32em) {
    margin-bottom: 1.2rem;
    font-weight: 500;
    color: var(--color-grey-500);
  }
`;

const Contact = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: center;

  & li {
    font-size: 1.5rem;
    color: var(--color-grey-600);

    &:hover {
      color: var(--color-brand-600);
    }

    @media (max-width: 32em) {
      font-size: 1.4rem;
      color: var(--color-grey-700);
    }
  }
`;

const GridContainer = styled.div`
  padding: 1.2rem 2rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 75em) {
    grid-row: 2;
  }

  @media (max-width: 56em) {
    padding: 1.2rem 0rem;
  }

  @media (max-width: 32em) {
    grid-column: 1;
    grid-row: 4;
  }
`;

const Office = styled(GridContainer)`
  @media (max-width: 75em) {
    grid-row: 1;
    grid-column: 2;
  }

  @media (max-width: 32em) {
    grid-column: 1;
    grid-row: 2;
  }
`;

const SupportUs = styled(GridContainer)`
  @media (max-width: 32em) {
    grid-column: 1;
    grid-row: 3;
  }
`;

const FooterHeading = styled.h5`
  color: var(--color-grey-600);
  font-size: 2.2rem;
  font-weight: 500;
  margin-bottom: 4rem;

  @media (max-width: 32em) {
    margin-bottom: 2rem;
    font-weight: 700;
  }
`;

const FooterList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & li {
    cursor: pointer;

    & p {
      font-size: var(--font-md);
    }

    &:hover {
      color: var(--color-brand-600);
    }
  }
`;

function Footer() {
  const navigate = useNavigate();

  return (
    <StyledFooter>
      <FooterGrid>
        <Company>
          <LogoBox onClick={() => navigate("/home")}>
            <Logo />
          </LogoBox>
          <SocialLinks>
            <li onClick={() => navigate("/home")}>
              <MdOutlineFacebook />
            </li>
            <li onClick={() => navigate("/home")}>
              <AiOutlineTwitter />
            </li>
            <li onClick={() => navigate("/home")}>
              <AiOutlineInstagram />
            </li>
          </SocialLinks>

          <Copyright>
            Copyright &copy; 2024 by <br />
            <strong>Silent Witness,Inc.</strong>
            &nbsp;&nbsp;All right reserved
          </Copyright>
        </Company>

        <Office>
          <FooterHeading>Office</FooterHeading>
          <Address>
            5423 W. Elm Street, Apartment 207B, 2nd Floor, Building C, AZ 94032
          </Address>
          <Contact>
            <li>
              <a href="tel:123-456-7890">123-456-7890</a>
            </li>
            <li>
              <a href="mailto:hello@silentwitness.com">
                hello@silentwitness.com
              </a>
            </li>
          </Contact>
        </Office>

        <SupportUs>
          <FooterHeading>Support us</FooterHeading>
          <FooterList>
            <li>
              <p>Donate to us</p>
            </li>
            <li>
              <p>Volunteering</p>
            </li>
            <li>
              <p>Fundraise</p>
            </li>
            <li>
              <p>Partnership enquiry form</p>
            </li>
          </FooterList>
        </SupportUs>

        <GridContainer>
          <FooterHeading>Help</FooterHeading>
          <FooterList>
            <li>
              <p>Our partners</p>
            </li>
            <li>
              <p>General enquiries</p>
            </li>
            <li>
              <p>Insights</p>
            </li>
            <li>
              <p>Case studies</p>
            </li>
          </FooterList>
        </GridContainer>
      </FooterGrid>

      {/* 
      <SocialLinks>
            <li>
              <AiOutlineGithub />
            </li>
            <li>
              <AiOutlineLinkedin />
            </li>
            <li>
              <AiOutlineMail />
            </li>
      </SocialLinks>
      */}
    </StyledFooter>
  );
}

export default Footer;
