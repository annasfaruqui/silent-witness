import styled from "styled-components";
import HeadingGroup from "../../ui/HeadingGroup";
import Introduction from "../../ui/Introduction";
import Heading from "../../ui/Heading";

import bgImage from "../../assets/images/about-page/community-engagement.jpg";
import { milestones_data as milestonesData } from "../../assets/data/data-milestones";

const Grid = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  align-items: center;
  gap: 5rem;
`;

const Genesis = styled.div`
  background-color: var(--color-brand-100);
  padding: 1.6rem 2rem;
  border-radius: var(--border-radius-lg);
`;

const Grid2 = styled.div`
  margin-top: 6rem;
  margin-bottom: 3rem;

  display: grid;
  grid-template-columns: 70% 1fr;
  gap: 3rem;

  @media (max-width: 75em) {
    grid-template-columns: 60% 1fr;
  }

  @media (max-width: 56em) {
    grid-template-columns: auto;
    grid-template-rows: repeat(1fr, 1fr);
  }
`;

const List = styled.ul`
  padding: 1rem 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledListItem = styled.li`
  & p {
    font-size: var(--font-lg);
    line-height: 1.5;

    & strong {
      font-size: var(--font-lg);
      font-weight: 600;
      color: var(--color-brand-600);
    }
  }
`;

const CommunityEngagement = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url(${bgImage});
  background-position: center;
  background-size: cover;

  padding: 2rem;
  border-radius: var(--border-radius-lg);
`;

function ListItem({ milestone }) {
  return (
    <StyledListItem>
      <p>
        <strong>{milestone.heading}:</strong>
        <br />
        {milestone.description}
      </p>
    </StyledListItem>
  );
}

function Background() {
  return (
    <section id="background">
      <HeadingGroup
        heading="Our Story"
        subHeading="Our insiparations and journey"
      />
      <Grid>
        <Introduction $mt="0" $mb="0">
          At Silent Witness, our journey is rooted in a commitment to making a
          meaningful impact on the safety and well-being of our communities. Our
          story began with a shared concern for the rising challenges posed by
          illegal drug trafficking and the realization that a collective effort
          was needed to address this critical issue. Building Silent Witness
          came with a set of challenges. However, every challenge was met with a
          determination to create a platform that truly makes a difference.
        </Introduction>
        <Genesis>
          <Heading as="h5">Genesis</Heading>
          <Introduction $mt="0" $mb="0">
            Driven by a passion for community welfare, we came together with a
            vision &mdash; To create a platform that empowers individuals to
            anonymously report incidents of drug trafficking. This vision stems
            from a deep understanding of the importance of providing a secure
            space where voices can be heard without fear.
          </Introduction>
        </Genesis>
      </Grid>
      <Grid2>
        <div>
          <Heading as="h5">Milestones achieved</Heading>
          <List>
            {milestonesData.map((milestone) => (
              <ListItem key={milestone.id} milestone={milestone} />
            ))}
          </List>
        </div>
        <CommunityEngagement>
          <Heading as="h5" color="var(--color-grey-50)">
            Our continued commitment
          </Heading>
          <Introduction color="var(--color-grey-50)">
            As we continue our journey, our commitment remains unwavering. We
            are dedicated to expanding our reach, enhancing our platform's
            features, and advocating for positive change in the fight against
            illegal drug activities. Every report, every partnership, and every
            engagement propels us forward on this collective journey towards a
            safer and drug-free society.
          </Introduction>
        </CommunityEngagement>
      </Grid2>
    </section>
  );
}

export default Background;
