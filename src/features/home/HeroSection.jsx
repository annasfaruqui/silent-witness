import styled, { css } from "styled-components";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi2";

import ButtonLink from "../../ui/ButtonLink";

import heroImg from "../../assets/images/hero-section/hero-image.png";
import Navbar from "../navigation/Navbar";
import { useHomePageScroll } from "../../contexts/HomePageScrollContext";

const StyledHeroSection = styled.section`
  padding-bottom: 6rem;
  background-color: var(--color-brand-100);

  ${(props) =>
    props.$scrolled === "true" &&
    css`
      padding-top: 10rem;
    `}
`;

const Box = styled.div`
  height: 100%;
  width: 100%;
  max-width: 150rem;
  margin: 0 auto;
  margin-top: 5rem;
  padding: 0 5rem;

  display: grid;
  grid-template-columns: 3fr 2.2fr;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  @media (max-width: 75em) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 32em) {
    padding: 0 5rem;
  }
`;

const TextBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 2.6rem;

  @media (max-width: 94em) {
    gap: 2rem;
  }

  @media (max-width: 75em) {
    width: 85%;
    padding-top: 3rem;
    text-align: center;
    align-items: center;
  }

  @media (max-width: 56em) {
    width: 100%;
  }

  & h1 {
    font-size: 6.8rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 2.4rem;

    @media (max-width: 94em) {
      font-size: 6.2rem;
      font-weight: 800;
      margin-bottom: 0;
    }

    @media (max-width: 75em) {
      font-size: 7rem;
      margin-bottom: 2rem;
    }

    @media (max-width: 56em) {
      font-size: 5.8rem;
      margin-bottom: 2rem;
    }

    @media (max-width: 32em) {
      font-size: 5rem;
      margin-bottom: 1.6rem;
    }
  }

  & h2 {
    font-size: 2.2rem;
    font-weight: 500;
    line-height: 1.3;

    @media (max-width: 94em) {
      font-size: 2rem;
    }

    @media (max-width: 81em) {
      font-size: 1.8rem;
    }

    @media (max-width: 75em) {
      font-size: 2.2rem;
    }

    @media (max-width: 56em) {
      font-size: var(--font-lg);
    }

    @media (max-width: 32em) {
      font-size: var(--font-md);
    }
  }
`;

const Highlight = styled.strong`
  color: var(--color-brand-600);
  font-weight: 800;
`;

const ButtonBox = styled.div`
  margin-top: 1.4rem;
  display: flex;
  gap: 2.4rem;

  @media (max-width: 32em) {
    flex-direction: column;
    width: 60%;
    gap: 1.2rem;
  }
`;

const ImgBox = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 75em) {
    margin: 0 auto;
    margin-top: 4rem;
  }
`;

const StyledButtonWithArrowLink = styled(Link)`
  font-size: var(--font-lg);
  padding: 1.2rem 2.4rem;
  font-weight: 500;
  color: var(--color-grey-600);
  background: var(--color-grey-0);
  border: none;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-100);
  }
`;

function HeroSection() {
  const { isScrolled } = useHomePageScroll();

  return (
    <StyledHeroSection id="hero" $scrolled={isScrolled ? "true" : "false"}>
      <Navbar page="home" />
      <Box>
        <TextBox>
          <h1>
            Reporting <Highlight>Drug Trafficking</Highlight> Anonymously
          </h1>
          <h2>
            <Highlight>Take a stand for a drug free land.</Highlight>
            <br /> Be a guardian of your community, Reporting drug trafficking
            is a courageous step towards building a safer, healthier
            environment.
          </h2>
          <ButtonBox>
            <ButtonLink to="/report-form" $variation="primary" size="large">
              Report a Crime
            </ButtonLink>
            <StyledButtonWithArrowLink
              to="about"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              Learn More
              <span>
                <HiArrowDown />
              </span>
            </StyledButtonWithArrowLink>
          </ButtonBox>
        </TextBox>
        <ImgBox>
          <img
            src={heroImg}
            alt="Anti-drug, Report drug trafficking, Police case"
          />
        </ImgBox>
      </Box>
    </StyledHeroSection>
  );
}

export default HeroSection;
