import styled from 'styled-components';

const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: center;

  margin: 50px auto;

  margin: 32px auto;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 15px;
    margin: 40px auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 20px;
    margin: 50px auto;
  }

  li {
    display: inline-flex;
    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.lg};
    transition: ${({ theme }) => theme.transitions.main};

    &:hover {
      box-shadow: ${({ theme }) => theme.colors.hoverShadowAccent};
      transform: translateY(-1px);
    }

    &.active {
      background-color: ${({ theme }) => theme.colors.accentBgSuccess};
      border-color: ${({ theme }) => theme.colors.accent};
      box-shadow: ${({ theme }) => theme.colors.hoverShadowAccent};
      transform: none;

      button {
        color: ${({ theme }) => theme.colors.accent};
      }
    }

    button {
      padding: 8px 14px;

      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;

      font-size: 0.9rem;
      font-weight: 500;
      line-height: 1.2;
      color: ${({ theme }) => theme.colors.textSecondary};
      text-transform: uppercase;

      transition: color ${({ theme }) => theme.transitions.main};

      &:hover {
        color: ${({ theme }) => theme.colors.accent};
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 10px 16px;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 1rem;
      }
    }
  }
`;

export { TagsList };
