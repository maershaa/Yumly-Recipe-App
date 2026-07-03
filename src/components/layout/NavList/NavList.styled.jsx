import styled from 'styled-components';

export const NavListComponent = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 22px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    gap: 15px;
  }

  li a {
    padding: 12px 16px;
    border-radius: ${({ theme }) => theme.radii.lg};

    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1.2;

    transition: ${({ theme }) => theme.transitions.main};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1rem;
      padding: 10px 16px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      padding: 12px 16px;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }

    &.active {
      background-color: ${({ theme }) => theme.colors.cardSecondary};
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;
