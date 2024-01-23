import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiArrowRightOnRectangle,
  HiOutlineUser,
  HiOutlineUserPlus,
} from "react-icons/hi2";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoFileTrayFullOutline } from "react-icons/io5";

import { useLogout } from "../features/authentication/useLogout";
import Modal from "./Modal";
import ConfirmLogout from "./ConfirmLogout";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
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
    padding: 1rem 2.4rem;
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

const StyledNavLink2 = styled.button`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  border: none;
  background-color: transparent;
  width: 100%;

  color: var(--color-grey-600);
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1rem 2.4rem;
  transition: all 0.3s;

  &:hover,
  &:active {
    color: var(--color-red-200);
    background-color: var(--color-red-100);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg {
    color: var(--color-red-200);
  }

  &:focus {
    outline: none;
  }
`;

function MainNav() {
  const { logout, isLoggingOut } = useLogout();

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
          <StyledNavLink to="/account">
            <HiOutlineUser />
            <span>Account</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/users">
            <HiOutlineUserPlus />
            <span>Add users</span>
          </StyledNavLink>
        </li>

        <li>
          <Modal>
            <Modal.Open opens="logout">
              <StyledNavLink2>
                <HiArrowRightOnRectangle />
                <span>Logout</span>
              </StyledNavLink2>
            </Modal.Open>
            <Modal.Window name="logout">
              <ConfirmLogout disabled={isLoggingOut} onConfirm={logout} />
            </Modal.Window>
          </Modal>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
