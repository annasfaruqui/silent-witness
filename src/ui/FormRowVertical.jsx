import styled, { css } from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;

  ${(props) =>
    props.type === "report" &&
    css`
      &:not(:last-child) {
        padding-top: 3rem;
        padding-bottom: 8rem;
        border-bottom: 1px solid var(--color-grey-300);
      }
    `}
`;

const Label = styled.label`
  font-weight: 500;
  color: var(--color-grey-600);

  ${(props) =>
    props.type === "report" &&
    css`
      font-size: var(--font-xl);
      margin-bottom: 1rem;
    `}
`;

const Error = styled.span`
  font-size: var(--font-sm);
  color: var(--color-red-200);
`;

function FormRowVertical({ label, error, children, type }) {
  return (
    <StyledFormRow type={type}>
      {label && (
        <Label type={type} htmlFor={children.props.id}>
          {label}
        </Label>
      )}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowVertical;
