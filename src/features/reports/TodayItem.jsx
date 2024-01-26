import styled from "styled-components";
import { format } from "date-fns";

import ButtonLink from "../../ui/ButtonLink";

import { collapseText } from "../../utils/helpers";
import { MIN_WORDS } from "../../utils/constants";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 10rem 1fr max-content;
  align-items: center;
  gap: 2rem;

  font-size: 1.4rem;
  padding: 0.8rem;
  border-bottom: 1px solid var(--color-grey-200);

  &:first-child {
    border-top: 1px solid var(--color-grey-200);
  }
`;

const StyledIncidentDate = styled.p`
  background-color: var(--color-brand-200);
  padding: 1.2px 3px;
  border-radius: var(--border-radius-lg);
  text-align: center;
`;

function TodayItem({ report }) {
  const { id, incidentDate, incidentDetails } = report;

  return (
    <StyledTodayItem>
      <StyledIncidentDate>
        {format(new Date(incidentDate), "dd-MM-yyyy")}
      </StyledIncidentDate>
      <p>{collapseText(incidentDetails, MIN_WORDS)}</p>
      <ButtonLink to={`/reports/${id}`} size="small">
        More Details
      </ButtonLink>
    </StyledTodayItem>
  );
}

export default TodayItem;
