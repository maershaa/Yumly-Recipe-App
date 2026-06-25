import styled from 'styled-components';
import { Tooltip } from '@/components';

export const StyledTooltip = styled(Tooltip)`
  /* Здесь можно добавить специфичные отступы, если нужно */
  /* Не трогать. нужно чтобы при ховере всплывало имя пользователя */
`;

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  button {
    padding: 12px 16px;
    font-size: 1rem;
    font-weight: 500;
    transition: ${({ theme }) => theme.transitions.main};

    color: ${({ theme }) => theme.colors.textPrimary};

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: 10px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      padding: 12px 16px;
      font-size: 1.4rem;
    }
  }
`;

export const UserAvatarWrapper = styled.div`
  position: relative;

  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.rounded};

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.cardSecondary};

  .userName {
    font-size: 1.2rem;
    font-weight: 600;
    font-family: ${({ theme }) => theme.fonts.main};
  }

  /*  наводим на UserAvatarWrapper -> меняем состояние StyledTooltip */
  &:hover ${StyledTooltip} {
    opacity: 1;
    visibility: visible;
    transform: translateY(-50%) translateX(0);
  }
`;
