import styled from "styled-components";

import Button from "./Button";
import Heading from "./Heading";
import SpinnerMini from "./SpinnerMini";

const StyledConfirmLogout = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
    hyphens: none;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
    margin-left: auto;
    width: 60%;

    & > * {
      width: 60%;
    }
  }
`;

function ConfirmLogout({ onCloseModal, disabled, onConfirm }) {
  return (
    <StyledConfirmLogout>
      <Heading as="h3">Logout</Heading>
      <p>Are you sure you want to Logout?</p>

      <div>
        <Button
          $variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button $variation="danger" disabled={disabled} onClick={onConfirm}>
          {disabled ? <SpinnerMini danger="true" /> : "Logout"}
        </Button>
      </div>
    </StyledConfirmLogout>
  );
}

export default ConfirmLogout;
