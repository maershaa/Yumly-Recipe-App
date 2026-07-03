import styled from 'styled-components';

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  padding: 15px 15px 40px 15px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 15px;
    gap: 50px;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1.4;

    max-width: 540px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 2.7rem;
    }
  }

  .description {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textSecondary};

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 1.3rem;
    }
  }

  .cookingTimeMain {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textPrimary};

    .accent {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  .tagsList {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 15px;

    li {
      display: flex;
      flex-direction: row;
      gap: 8px;
      align-items: center;

      padding: 8px;
      background-color: ${({ theme }) => theme.colors.accentBgWarning};
      border: 1px solid ${({ theme }) => theme.colors.hoverBorderSecondary};
      border-radius: ${({ theme }) => theme.radii.pill};
      color: ${({ theme }) => theme.colors.accentSecondary};
    }

    span {
      font-size: 0.7rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.accentSecondary};
      white-space: nowrap; /* Запрещаем тексту внутри бейджа разбиваться на 2 строки */
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      span {
        font-size: 0.9rem;
      }
    }
  }
`;

export const RecipeHeaderBar = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 30px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  align-items: center;

  .actionsItem {
    //общий класс для EditBtn и DeleteBtn
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 14px;
    border-radius: ${({ theme }) => theme.radii.rounded};
    transition: ${({ theme }) => theme.transitions.main};
    text-decoration: none;

    color: ${({ theme }) => theme.colors.textPrimary};
    opacity: 0.7;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      margin: 0 0 0 auto;
    }

    svg {
      display: block;
      font-size: 28px;
    }
  }

  .edit {
    background-color: ${({ theme }) => theme.colors.accent};
    &:hover {
      box-shadow: ${({ theme }) => theme.colors.hoverShadowAccent};
      transform: translateY(-1px);
      opacity: 1;
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.colors.accent};
      outline-offset: 2px;
      opacity: 1;
    }
  }

  .delete {
    background: ${({ theme }) => theme.colors.dangerBg};

    &:hover {
      box-shadow: ${({ theme }) => theme.colors.hoverShadowDanger};
      transform: translateY(-1px);
      opacity: 1;
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.colors.danger};
      outline-offset: 2px;
      opacity: 1;
    }
  }
`;
