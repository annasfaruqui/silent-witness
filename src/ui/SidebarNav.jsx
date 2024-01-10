import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineUsers } from "react-icons/hi2";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoFileTrayFullOutline } from "react-icons/io5";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-brand-700);
    background-color: var(--color-brand-100);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-700);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <LuLayoutDashboard />
            <span>Dashboard</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/reports">
            <IoFileTrayFullOutline />
            <span>Reports</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/users">
            <HiOutlineUsers />
            <span>Users</span>
          </StyledNavLink>
        </li>

        {/* <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li> */}
      </NavList>
    </nav>
  );
}

export default MainNav;
