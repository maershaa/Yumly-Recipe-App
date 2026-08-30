import {
  Container,
  IconWrapper,
  Title,
  Description,
} from './NoRecipesFound.styled';
import { LuSearchX } from 'react-icons/lu';

const NoRecipesFound = () => {
  return (
    <Container>
      <IconWrapper>
        <LuSearchX />
      </IconWrapper>
      <Title>No recipes found</Title>
      <Description>
        There are no recipes matching your search. Try changing your search term
        or filters.
      </Description>{' '}
    </Container>
  );
};

export { NoRecipesFound };
