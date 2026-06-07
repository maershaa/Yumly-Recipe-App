import styled from 'styled-components';
import { Tooltip } from '@/components';

export const StyledTooltip = styled(Tooltip)`
  /* Здесь можно добавить специфичные отступы, если нужно */
  /* Не трогать. нужно чтобы при ховере всплывало имя пользователя */
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  padding: 20px 40px;
  margin: 40px auto;

  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
`;

const NavMenu = styled.nav`
  ul {
    display: flex;
    gap: 8px;
  }
  a {
    padding: 12px 16px;
    border-radius: ${({ theme }) => theme.radii.lg};
    transition: background-color 0.3s ease;

    &.active {
      background-color: ${({ theme }) => theme.colors.cardSecondary};
      color: ${({ theme }) => theme.colors.accent};
      font-weight: 500;
    }
  }
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  a {
    padding: 8px 16px;
    border-radius: ${({ theme }) => theme.radii.md};
  }

  .accent {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: ${({ theme }) => theme.colors.icon};
  transition: transform 0.2s;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const UserAvatarWrapper = styled.div`
  position: relative;

  width: 40px;
  height: 40px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.cardSecondary};
  color: #fff;

  .userName {
    font-size: 1.2rem;
    font-weight: 600;
    font-family: ${({ theme }) => theme.fonts.main};
    text-transform: uppercase;
  }

  /*  наводим на UserAvatarWrapper -> меняем состояние StyledTooltip */
  &:hover ${StyledTooltip} {
    opacity: 1;
    visibility: visible;
    transform: translateY(-50%) translateX(0);
  }
`;

export { Header, NavMenu, UserMenu, UserAvatarWrapper, ThemeButton };
