import styled from 'styled-components';

export const TagsWrapper = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr; // На мобильных устройствах каждый чекбокс занимает всю ширину строки
  align-items: stretch; // Растягиваем элементы по высоте, если строки отличаются по содержимому

  column-gap: 10px;
  margin-top: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(
      2,
      1fr
    ); //На планшетах и десктопах отображаем чекбоксы в две колонки

    column-gap: 20px;
    row-gap: 10px;

    align-items: center;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    column-gap: 30px;
  }

  svg {
    color: ${({ theme }) => theme.colors.icon};
  }

  .tagContent {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  label {
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;

    margin-bottom: 10px;
    font-size: 1.4rem;

    transition: ${({ theme }) => theme.transitions.main};
  }

  /* При наведении на всю область label подсвечиваем кастомный checkbox */
  label:hover .customCheckbox {
    background-color: ${({ theme }) => theme.colors.accentBgSuccess};
    border-color: ${({ theme }) => theme.colors.accent};
  }

  input {
    /* Скрываем нативный checkbox,
   оставляя его доступным для клавиатуры и screen readers */
    position: absolute;
    opacity: 0;
    pointer-events: none;

    &:checked ~ .customCheckbox {
      background-color: ${({ theme }) => theme.colors.accent};
      border-color: ${({ theme }) => theme.colors.accent};
    }

    &:hover {
      border-color: transparent;
      box-shadow: none;
    }
  }

  /* Визуальная часть кастомного checkbox. Сам квадратик */
  .customCheckbox {
    position: relative;

    width: 30px;
    height: 30px;

    flex-shrink: 0;

    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.sm};

    transition: ${({ theme }) => theme.transitions.main};
  }

  /* Добавляем псевдоэлемент с галочкой только для выбранного checkbox */
  input:checked ~ .customCheckbox::after {
    position: absolute;

    content: '✓';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.25rem;

    color: ${({ theme }) => theme.colors.surface};
  }

  /* Показываем outline только при навигации с клавиатуры */
  input:focus-visible + .customCheckbox {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 3px;
  }
`;
