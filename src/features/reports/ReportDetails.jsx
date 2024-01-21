import styled from "styled-components";
import { format } from "date-fns";
import { PiNotePencilDuotone } from "react-icons/pi";

import Tag from "../../ui/Tag";
import { statusToTagColor, subtractDates } from "../../utils/helpers";

const DetailsBox = styled.section`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-brand-100);
  border-radius: var(--border-radius-lg);

  overflow: hidden;
`;

const Header = styled.header`
  background-color: var(--color-brand-600);
  padding: 2rem 2rem;
  color: var(--color-grey-200);
  font-size: var(--font-lg);
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 3rem;
    width: 3rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 600;
    font-size: 1.9rem;
  }

  & span {
    background-color: var(--color-brand-200);
    color: var(--color-grey-600);
    padding: 3px 1rem;
    border-radius: var(--border-radius-md);
  }
`;

const Section = styled.section`
  padding: 2rem 4rem;
`;

const Incident = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
  border-radius: 2rem;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  column-gap: 5rem;

  & h3 {
    color: var(--color-brand-600);
    font-size: 2.2rem;
    align-self: center;
  }

  & h4 {
    color: var(--color-grey-500);
    font-size: var(--font-sm);
    justify-self: center;
    align-self: center;
  }
`;

const IncidentDate = styled.p`
  justify-self: center;
  margin-top: 2px;
  width: fit-content;
  font-size: var(--font-lg);
  font-weight: 600;
  background-color: var(--color-brand-200);
  color: var(--color-grey-600);
  padding: 3px 1rem;
  border-radius: var(--border-radius-md);
`;

const IncidentDetail = styled.p`
  margin-top: 1rem;
  width: 100%;
  font-size: var(--font-lg);
  line-height: 1.5;
  word-spacing: 3px;
  hyphens: none;
`;

const Person = styled.div`
  margin-bottom: 5rem;
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 5rem;
  align-items: start;

  & h3 {
    color: var(--color-brand-600);
    font-size: 2.2rem;
  }

  & h4 {
    text-align: center;
    color: var(--color-grey-500);
    font-size: var(--font-sm);
    justify-self: end;
    align-self: center;

    margin-right: 4px;
    width: 60%;
  }
`;

const PersonDetails = styled.p`
  margin-top: 1rem;
  width: 100%;
  font-size: var(--font-lg);
  line-height: 1.5;
  word-spacing: 1px;
  hyphens: none;
`;

const NumPersons = styled.p`
  margin-top: 1rem;

  justify-self: end;
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--color-brand-800);

  background-color: var(--color-brand-100);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.8rem 1.4rem;
  border-radius: var(--border-radius-lg);
`;

const CommonDetailsContainer = styled.div`
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & h3 {
    color: var(--color-brand-600);
    font-size: 2.2rem;

    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & p {
    font-size: var(--font-lg);
    line-height: 1.45;
    word-spacing: 1px;
    hyphens: none;
  }
`;

const Grid = styled.div`
  background-color: var(--color-grey-100);
  padding: 2rem;
  border-radius: var(--border-radius-lg);

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const StyledImgBox = styled.figure`
  width: 100%;
  background-color: var(--color-grey-200);
  object-fit: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 100%;
  display: block;
`;

function ImgBox({ src }) {
  return (
    <StyledImgBox>
      <Img src={src} alt="incident images" />
    </StyledImgBox>
  );
}

function ReportDetails({ report }) {
  const {
    reportDate,
    status,
    incidentDetails,
    incidentDate,
    addressDetails,
    numPersons,
    personDetails,
    vehicleDetails,
    weaponsDetails,
    furtherInformation,
    images,
  } = report;

  return (
    <DetailsBox>
      <Header>
        <div>
          <PiNotePencilDuotone />
          <p>
            Case reported on &nbsp;
            <span>{format(new Date(reportDate), "EEE, MMM dd, yyyy")}</span>
          </p>
        </div>
        <div>
          <p>
            This case is reported{" "}
            <strong
              style={{
                color: "var(--color-grey-0)",
                backgroundColor: "var(--color-brand-700)",
                padding: "0 7px",
                borderRadius: "var(--border-radius-lg)",
              }}
            >
              {subtractDates(reportDate, incidentDate)} days
            </strong>{" "}
            after the Incident date
          </p>
        </div>
      </Header>

      <Section>
        <Incident>
          <h3>Incident Details</h3>
          <h4>Incident took place on</h4>
          <IncidentDetail>{incidentDetails}</IncidentDetail>
          <IncidentDate>
            {format(new Date(incidentDate), "EEE, MMM dd, yyyy")}
          </IncidentDate>
        </Incident>

        <CommonDetailsContainer>
          <h3>Address / Address description</h3>
          <p>
            {addressDetails === "" || addressDetails === null ? (
              <span>&mdash;</span>
            ) : (
              addressDetails
            )}
          </p>
        </CommonDetailsContainer>

        <Person>
          <h3>Person(s) Details</h3>
          <h4>Estimated number of person(s) involved</h4>
          <PersonDetails>
            {personDetails === "" || personDetails === null ? (
              <span>&mdash;</span>
            ) : (
              personDetails
            )}
          </PersonDetails>
          <NumPersons>
            {numPersons === "" || numPersons === null ? (
              <span>Not known</span>
            ) : (
              <span>{numPersons.toString().padStart(2, "0")} persons</span>
            )}
          </NumPersons>
        </Person>

        <CommonDetailsContainer>
          <h3>Vehicle(s) Details</h3>
          <p>
            {vehicleDetails === "" || vehicleDetails === null ? (
              <span>&mdash;</span>
            ) : (
              vehicleDetails
            )}
          </p>
        </CommonDetailsContainer>

        <CommonDetailsContainer>
          <h3>Weapon(s) Details</h3>
          <p>
            {weaponsDetails === "" || weaponsDetails === null ? (
              <span>&mdash;</span>
            ) : (
              weaponsDetails
            )}
          </p>
        </CommonDetailsContainer>

        <CommonDetailsContainer>
          <h3>Further Information</h3>
          <p>
            {furtherInformation === "" || furtherInformation === null ? (
              <span>&mdash;</span>
            ) : (
              furtherInformation
            )}
          </p>
        </CommonDetailsContainer>

        <CommonDetailsContainer>
          <h3>Incident Images</h3>

          {!images?.length || images === null ? (
            <span>&mdash;</span>
          ) : (
            <Grid>
              {images.map((image) => (
                <ImgBox src={image} />
              ))}
            </Grid>
          )}
        </CommonDetailsContainer>

        <CommonDetailsContainer>
          <h3>
            Report Status
            <Tag type={statusToTagColor[status]}>{status}</Tag>
          </h3>

          {status === "unsolved" && <p>This case has not yet been solved</p>}
          {status === "probing" && <p>This case is under investigation</p>}
          {status === "solved" && <p>This case has been solved</p>}
          {status === "false" && <p>This is a false report</p>}
        </CommonDetailsContainer>
      </Section>
    </DetailsBox>
  );
}

export default ReportDetails;
