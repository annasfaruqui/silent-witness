import { styled } from "styled-components";

import SidebarNav from "./SidebarNav";
import Logo from "./Logo";
import Uploader from "../assets/Uploader";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3rem 2.4rem;
  border-right: 1px solid var(--color-brand-400);

  grid-row: 1/-1;

  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <SidebarNav />

      <Uploader />
    </StyledSidebar>
  );
}

export default Sidebar;
