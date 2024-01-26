import styled from "styled-components";

import { annasLinks, faizanLinks } from "../assets/data/data-social-links";

const StyledTeamFooter = styled.div`
  background-color: var(--color-brand-200);
  border-top: 2px solid var(--color-brand-700);
`;

const InnerDiv = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 1.6rem 5rem 3rem;

  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  align-items: center;

  @media (max-width: 32em) {
    padding: 1.6rem 1rem 3rem;
  }

  & h6 {
    font-size: 1.7rem;
    font-weight: 800;
    color: var(--color-grey-800);
    margin-bottom: 1.2rem;
    margin-right: 1rem;
  }
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 32em) {
    gap: 1rem;
  }

  & p {
    font-size: var(--font-lg);
    font-weight: 700;
    word-spacing: 3px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: var(--color-brand-700);
    }
  }
`;

const SocialLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Link = styled.a`
  & span {
    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
      height: 2.5rem;
      width: 2.5rem;
      fill: var(--color-grey-700);
      transition: all 0.2s;

      @media (max-width: 32em) {
        height: 2rem;
        width: 2rem;
      }

      &:hover,
      &:active {
        fill: var(--color-brand-700);
      }
    }
  }
`;

function SocialLink({ link }) {
  return (
    <li>
      <Link href={link.link} target="_blank" rel="noreferrer">
        <span>
          <link.icon />
        </span>
      </Link>
    </li>
  );
}

function TeamFooter() {
  return (
    <StyledTeamFooter id="team-footer">
      <InnerDiv>
        <h6>{`</> Designed & Coded by`}</h6>
        <Member>
          <p>Mohammed Annas Faruqui</p>
          <SocialLinks>
            {annasLinks.map((link) => (
              <SocialLink key={link.id} link={link} />
            ))}
          </SocialLinks>
        </Member>
        <Member>
          <p>Mohammed Faizan Mateen</p>
          <SocialLinks>
            {faizanLinks.map((link) => (
              <SocialLink key={link.id} link={link} />
            ))}
          </SocialLinks>
        </Member>
      </InnerDiv>
    </StyledTeamFooter>
  );
}

export default TeamFooter;
