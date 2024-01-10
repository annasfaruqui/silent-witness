import styled from "styled-components";

const StyledEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    font-size: 2.2rem;
    font-weight: 600;
    text-align: center;
    background-color: var(--color-grey-100);
    padding: 3rem 10rem;
    width: 100%;
  }
`;

function Empty({ resourceName }) {
  return (
    <StyledEmpty>
      <p>No {resourceName} could be found.</p>
    </StyledEmpty>
  );
}

export default Empty;
