import styled from 'styled-components';

export const IngredientRow = styled.div`
  display: grid;
  /* 
    1fr — название (забирает всё свободное место).
    80px — количество (фиксированная небольшая ширина).
    90px — селект (фиксированная небольшая ширина).
    auto — кнопка удаления (по размеру иконки).
  */
  grid-template-columns: 1fr 80px 90px auto;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin-bottom: 12px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 120px 110px auto;
    gap: 15px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 110px 50px auto;
    gap: 10px;
  }

  //Убираем стандартную стрелку select
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;
