import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    gap: 15px;

    li {
      display: flex;
      flex-direction: row;
      gap: 8px;
      align-items: center;

      padding: 8px;
      background-color: ${({ theme }) => theme.colors.cardSecondary};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: ${({ theme }) => theme.radii.pill};
      color: ${({ theme }) => theme.colors.accentSecondary};
    }
  }
`;

export const RecipeHeaderBar = styled.div`
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
  display: grid;
  grid-template-columns: 1fr 1fr;
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

    svg {
      display: block;
      font-size: 28px;
    }
  }

  .edit {
    border: 2px solid ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.textPrimary};
    background: ${({ theme }) => theme.colors.accentBgSuccess};

    &:hover {
      background-color: ${({ theme }) => theme.colors.accent};
      box-shadow: ${({ theme }) => theme.colors.hoverShadowAccent};
      transform: translateY(-1px);
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.colors.accent};
      outline-offset: 2px;
    }
  }

  .delete {
    border: 2px solid ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.textPrimary};
    background: ${({ theme }) => theme.colors.dangerBg};

    &:hover {
      background-color: ${({ theme }) => theme.colors.dangerHover};
      box-shadow: ${({ theme }) => theme.colors.hoverShadowDanger};
      transform: translateY(-1px);
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.colors.danger};
      outline-offset: 2px;
    }
  }
`;
