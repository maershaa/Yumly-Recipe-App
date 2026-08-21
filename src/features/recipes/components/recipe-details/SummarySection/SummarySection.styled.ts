import styled from 'styled-components';

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: flex-start;
  padding: 15px 15px 40px 15px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 15px;
    gap: 35px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 45px;
  }

  h1 {
    font-size: 1.4rem;
    font-weight: 800;
    line-height: 1.4;

    color: ${({ theme }) => theme.colors.textPrimary};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1.5rem;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 1.7rem;
    }
  }

  .description {
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.textSecondary};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1rem;
    }
  }

  .cookingTimeMain {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1.1rem;
    }

    .accent {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  .tagsList {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;

    li {
      display: flex;
      flex-direction: row;
      gap: 6px;
      align-items: center;

      padding: 6px 12px;
      background-color: ${({ theme }) => theme.colors.accentBgWarning};
      border: 1px solid ${({ theme }) => theme.colors.hoverBorderSecondary};
      border-radius: ${({ theme }) => theme.radii.pill};
      color: ${({ theme }) => theme.colors.accentSecondary};
    }

    svg {
      width: 14px;
      height: 14px;
      color: ${({ theme }) => theme.colors.accentSecondary};
      flex-shrink: 0;
    }

    span {
      font-size: 0.7rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.accentSecondary};
      white-space: nowrap; /* Запрещаем тексту внутри бейджа разбиваться на 2 строки */
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      gap: 15px;

      svg {
        width: 16px;
        height: 16px;
      }
      span {
        font-size: 0.85rem;
      }
    }
  }
`;

export const RecipeHeaderBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-end;
  }

  .actionsItem {
    //общий класс для EditBtn и DeleteBtn
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 8px;
    border-radius: ${({ theme }) => theme.radii.rounded};
    transition: ${({ theme }) => theme.transitions.main};
    text-decoration: none;

    color: ${({ theme }) => theme.colors.textPrimary};
    opacity: 0.7;

    svg {
      display: block;
      width: 26px;
      height: 26px;
      flex-shrink: 0;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 32px;
        height: 32px;
      }
    }
  }
  .edit {
    color: ${({ theme }) => theme.colors.accent};

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
    color: ${({ theme }) => theme.colors.danger};

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
