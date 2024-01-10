import styled from "styled-components";

import Button from "./Button";
import Heading from "./Heading";

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
  return (
    <StyledConfirmUpdate>
      <Heading as="h3">Update {resourceName}</Heading>
      <p>
        Are you sure you want to update the status of this {resourceName} to{" "}
        {status}?
      </p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button
          variation={type === "danger" ? "danger" : "primary"}
          disabled={disabled}
          onClick={onConfirm}
        >
          Mark as {status}
        </Button>
      </div>
    </StyledConfirmUpdate>
  );
}

export default ConfirmUpdateStatus;
