import styled from 'styled-components';

const RecipesListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
`;
export { RecipesListWrapper };
