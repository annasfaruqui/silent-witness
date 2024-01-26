import styled from "styled-components";

import Button from "./Button";
import Heading from "./Heading";

import { capitalizeFirstLetter } from "../utils/capitalizer";

const StyledConfirmUpdate = styled.div`
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
  }
`;

function ConfirmUpdateStatus({
  resourceName,
  onConfirm,
  disabled,
  onCloseModal,
  type,
  status,
}) {
  function handleClick() {
    onConfirm();
    setTimeout(onCloseModal, 500);
  }

  return (
    <StyledConfirmUpdate>
      <Heading as="h3">Update {resourceName}</Heading>
      <p>
        Are you sure you want to update the status of this {resourceName} to{" "}
        <strong>&ldquo;{capitalizeFirstLetter(status)}&rdquo;</strong>?
      </p>

      <div>
        <Button
          $variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button
          $variation={type === "danger" ? "danger" : "primary"}
          disabled={disabled}
          onClick={handleClick}
        >
          Mark as {capitalizeFirstLetter(status)}
        </Button>
      </div>
    </StyledConfirmUpdate>
  );
}

export default ConfirmUpdateStatus;
