import styled from "styled-components";

const StyledTestimonial = styled.div`
  background-color: var(--color-brand-900);
  padding: 1rem 2rem;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);

  display: grid;
  grid-template-columns: 6rem 1fr;
  grid-template-rows: 6rem 1fr;
  gap: 1rem;
  align-items: center;

  transition: all 0.3s;

  &:hover {
    transform: translateY(-1rem);
    box-shadow: var(--shadow-lg);
  }
`;

const Img = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: green;
`;

const Person = styled.div`
  display: flex;
  flex-direction: column;
`;

const Author = styled.p`
  color: var(--color-brand-100);
  font-size: var(--font-md);
`;

const Position = styled.p`
  color: var(--color-grey-400);
  font-style: italic;
  font-size: var(--font-sm);
`;

const P = styled.p`
  grid-column: 1/-1;
  align-self: stretch;

  color: var(--color-grey-0);
  font-size: var(--font-md);
  line-height: 1.6;
  hyphens: none;
`;

function Testimonial({ testimonial }) {
  return (
    <StyledTestimonial>
      <Img src={testimonial.image} alt={testimonial.author} />
      <Person>
        <Author>{testimonial.author}</Author>
        <Position>({testimonial.position})</Position>
      </Person>
      <P>&rdquo;{testimonial.testimonial}&ldquo;</P>
    </StyledTestimonial>
  );
}

export default Testimonial;
