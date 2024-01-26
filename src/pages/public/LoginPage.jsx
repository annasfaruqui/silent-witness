import styled from "styled-components";

import LoginLayout from "../../features/authentication/LoginLayout";

import bgImg from "../../assets/images/login-page/bg-image.jpg";

const StyledLoginPage = styled.div`
  height: 100vh;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0.55)
    ),
    url(${bgImg});
  background-size: cover;
  background-position: center;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 50%;
`;

function LoginPage() {
  return (
    <StyledLoginPage>
      <LoginLayout />
    </StyledLoginPage>
  );
}

export default LoginPage;
