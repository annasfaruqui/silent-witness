import { useNavigate } from "react-router";
import styled from "styled-components";

import LoginForm from "./LoginForm";
import Logo from "../../ui/Logo";
import Button from "../../ui/Button";

const Box = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  padding: 5rem;
`;

const LeftBox = styled(Box)`
  background-color: transparent;
  width: 45%;

  margin: 0 auto;

  @media (max-width: 75em) {
    width: 100%;
  }
`;

const Div = styled.div`
  max-width: 70rem;

  @media (max-width: 75em) {
    max-width: 100%;
  }

  & h1 {
    font-size: var(--font-3xl);
    line-height: 1.4;
    color: var(--color-grey-300);

    & span {
      color: var(--color-brand-400);
    }

    @media (max-width: 75em) {
      font-size: 3.6rem;
    }

    @media (max-width: 56em) {
      font-size: var(--font-2xl);
    }

    @media (max-width: 32em) {
      font-size: var(--font-xl);
    }
  }
`;

const RightBox = styled(Box)`
  background-color: var(--color-brand-100);
  width: 55%;
  padding-left: 10rem;

  clip-path: polygon(15% 0, 100% 0%, 100% 100%, 0 100%);

  @media (max-width: 75em) {
    display: none;
  }
`;

const LogoBox = styled.div`
  width: 45rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormBox = styled.div`
  width: 48rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function LoginLayout() {
  const navigate = useNavigate();

  return (
    <>
      <LeftBox>
        <Div>
          {window.innerWidth >= 1200 && (
            <h1>
              This login form is only for use by the Authorized Individuals.
              <br />
              <span>Please do not try to use this form.</span>
            </h1>
          )}
          {window.innerWidth < 1200 && (
            <h1>
              The secure pages of this application are to be used only by the
              authorized users on a desktop.
              <br />
              <span>So the secure pages are blocked for mobile users.</span>
              <br />
              Please go back
              <br />
              <br />
              <Button
                size="large"
                onClick={() => navigate(-1, { replace: true })}
              >
                Go back
              </Button>
            </h1>
          )}
        </Div>
      </LeftBox>
      <RightBox>
        <LogoBox>
          <Logo />
        </LogoBox>
        <FormBox>
          <LoginForm />
        </FormBox>
      </RightBox>
    </>
  );
}

export default LoginLayout;
