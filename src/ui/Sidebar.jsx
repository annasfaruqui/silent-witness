import { styled } from "styled-components";

import SidebarNav from "./SidebarNav";
import Logo from "./Logo";
import Uploader from "../assets/Uploader";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 5rem 2.4rem 3.2rem;
  border-right: 1px solid var(--color-brand-600);

  grid-row: 1/-1;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
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
