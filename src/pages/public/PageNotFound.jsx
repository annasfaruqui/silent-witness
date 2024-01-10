import { useNavigate } from "react-router";
import styled from "styled-components";
import { HiArrowLeft } from "react-icons/hi2";

import ButtonWithArrow from "../../ui/ButtonWithArrow";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-grey-200);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 3.2rem;
  }
`;

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <StyledPageNotFound>
      <Box>
        <h1>The page you are looking for could not be found 😢</h1>
        <ButtonWithArrow
          gap="1"
          onClick={() => navigate(-1, { replace: true })}
          size="large"
        >
          <span>
            <HiArrowLeft />
          </span>
          Go back
        </ButtonWithArrow>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
