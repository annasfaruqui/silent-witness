import styled from "styled-components";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";

import { useTodayReports } from "./useTodayReports";

const StyledTodayReports = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 6;
  padding-top: 2.4rem;
`;

const ListHeader = styled.div`
  margin-top: -1rem;
  margin-bottom: -2rem;

  padding: 0.6rem;
  display: grid;
  grid-template-columns: 10rem 1fr 15rem;
  gap: 2rem;
  align-items: center;
  justify-items: center;
  /* border-top: 1px solid var(--color-grey-200); */

  & p {
    font-size: 1.2rem;
    /* background-color: red; */

    font-weight: 700;
    text-transform: uppercase;
    color: var(--color-grey-600);
    text-align: center;
  }
`;

const TodayList = styled.ul`
  overflow-y: auto;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 5px !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoReports = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

function TodayReports() {
  const { isPending, todayReports } = useTodayReports();

  return (
    <StyledTodayReports>
      <Row type="horizontal">
        <Heading as="h2">Today's reports</Heading>
      </Row>
      {!isPending ? (
        todayReports.length > 0 ? (
          <>
            <ListHeader>
              <p>Incident Date</p>
              <p>Incident Description</p>
              <p></p>
            </ListHeader>
            <TodayList>
              {todayReports.map((report) => (
                <TodayItem report={report} key={report.id} />
              ))}
            </TodayList>
          </>
        ) : (
          <NoReports>No reports today.</NoReports>
        )
      ) : (
        <Spinner />
      )}
    </StyledTodayReports>
  );
}

export default TodayReports;
