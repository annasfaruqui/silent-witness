import styled from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../../ui/Logo";

const LeftBox = styled.div`
  color: var(--color-grey-0);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;

  & h1 {
    font-size: var(--font-3xl);
    line-height: 1.4;

    & span {
      color: var(--color-brand-400);
    }
  }
`;

const RightBox = styled.div`
  background-color: var(--color-brand-100);
  clip-path: polygon(21% 0, 100% 0%, 100% 100%, 0 100%);

  padding-left: 15%;

  display: grid;
  grid-template-columns: 70%;
  grid-template-rows: auto auto;
  gap: 3rem;
  align-items: center;
  justify-content: center;

  align-content: center;
  justify-content: center;

  padding-bottom: 3rem;
`;

function LoginLayout() {
  return (
    <>
      <LeftBox>
        <h1>
          This login form is only for use by the Authorized Individuals.
          <br />
          <span>Please do not try to use this form.</span>
        </h1>
      </LeftBox>
      <RightBox>
        <Logo />
        <LoginForm />
      </RightBox>
    </>
  );
}

export default LoginLayout;
