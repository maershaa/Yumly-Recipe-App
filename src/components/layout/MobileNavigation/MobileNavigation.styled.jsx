import styled from 'styled-components';
import { Tooltip } from '@/components';

export const StyledTooltip = styled(Tooltip)`
  /* Здесь можно добавить специфичные отступы, если нужно */
  /* Не трогать. нужно чтобы при ховере всплывало имя пользователя */
`;

const ResponsiveNavigationWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 24px 40px;
  margin: 40px auto;

  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const BurgerMenu = styled.div`
  top: 0;
  position: sticky; //почему не прилипает?

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  svg {
    width: 30px;
    height: 30px;
  }
`;

const MobileMenu = styled.div`
  display: none;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;

  svg {
    width: 30px;
    height: 30px;
  }

  .closeBtn svg {
    top: 20px;
    right: 20px;
    position: absolute;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }

  a {
    padding: 12px 16px;
    border-radius: ${({ theme }) => theme.radii.lg};

    font-size: 1.4rem;
    font-weight: 500;
    transition: ${({ theme }) => theme.transitions.main};

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }

    &.active {
      background-color: ${({ theme }) => theme.colors.cardSecondary};
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  a,
  button {
    padding: 8px 16px;
    border-radius: ${({ theme }) => theme.radii.md};

    font-size: 1.4rem;
    font-weight: 500;
    transition: ${({ theme }) => theme.transitions.main};

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  .accent {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export { UserMenu, ResponsiveNavigationWrapper, BurgerMenu, MobileMenu };
