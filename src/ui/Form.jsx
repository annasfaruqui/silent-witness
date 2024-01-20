import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-lg);

      display: flex;
      flex-direction: column;

      @media (max-width: 32em) {
        padding: 2.4rem 2rem;
      }
    `}

  ${(props) =>
    props.type === "login" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-lg);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: var(--font-md);
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
