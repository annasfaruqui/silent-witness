import { styled } from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 2fr 1fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    margin-top: 2rem;
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }

  @media (max-width: 75em) {
    grid-template-columns: 15rem 3fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 56em) {
    grid-template-columns: auto;
    grid-template-rows: auto 1fr auto;
    gap: 1rem;
    padding: 0.5rem 0;

    &:not(:last-child) {
      border-bottom: none;
    }
  }

  @media (max-width: 32em) {
    padding: 0;
  }
`;

const Label = styled.label`
  font-weight: 500;

  @media (max-width: 56em) {
    font-size: var(--font-md);
  }

  @media (max-width: 32em) {
    display: none;
  }
`;

const Error = styled.span`
  font-size: var(--font-sm);
  color: var(--color-red-200);

  @media (max-width: 56em) {
    font-size: var(--font-lg);
  }
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
