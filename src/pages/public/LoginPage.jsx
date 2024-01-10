import styled from "styled-components";

import bgImg from "../../assets/images/login-page/bg-image.jpg";
import LoginLayout from "../../features/authentication/LoginLayout";

const StyledLoginPage = styled.div`
  height: 100dvh;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0.55)
    ),
    url(${bgImg});
  background-size: cover;
  background-position: center;

  display: grid;
  grid-template-columns: 2fr 2.5fr;
`;

function LoginPage() {
  return (
    <StyledLoginPage>
      <LoginLayout />
    </StyledLoginPage>
  );
}

export default LoginPage;
