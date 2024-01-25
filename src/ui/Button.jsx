import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: var(--font-sm);
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: var(--font-md);
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: var(--font-lg);
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-grey-100);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-100);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-200);

    &:hover {
      background-color: var(--color-red-300);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  ${(props) =>
    props.$grow === "true" &&
    css`
      flex-grow: 1;
    `}

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.$variation]}
`;

Button.defaultProps = {
  $variation: "primary",
  size: "medium",
};

export default Button;
