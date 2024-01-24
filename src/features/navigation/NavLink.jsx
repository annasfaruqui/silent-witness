import { Link } from "react-scroll";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: var(--color-grey-800);
  font-size: 2rem;
  font-weight: 600;
  padding: 1rem 0.8rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover,
  &:active {
    color: var(--color-brand-700);
    border-radius: var(--border-radius-sm);
  }
`;

const StyledMobileLink = styled(Link)`
  border-radius: var(--border-radius-sm);
  color: var(--color-brand-800);
  font-size: var(--font-xl);
  font-weight: 600;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s;

  @media (max-width: 32em) {
    padding: 1rem;
  }

  &:hover,
  &:active {
    color: var(--color-brand-700);
    background-color: var(--color-brand-100);
  }
`;

function NavLink({ linkTo, name, page, handleClick }) {
  return (
    <li>
      {!handleClick ? (
        <StyledLink
          to={linkTo}
          spy={true}
          smooth={true}
          offset={page !== "report form" ? -120 : -260}
          duration={500}
        >
          {name}
        </StyledLink>
      ) : (
        <StyledMobileLink
          to={linkTo}
          spy={true}
          smooth={true}
          offset={page !== "report form" ? -120 : -260}
          duration={500}
          onClick={handleClick}
        >
          {name}
        </StyledMobileLink>
      )}
    </li>
  );
}

export default NavLink;
