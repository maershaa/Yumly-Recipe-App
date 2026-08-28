import styled from 'styled-components';
import { Tooltip } from '@/components';

export const StyledTooltip = styled(Tooltip)`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const UserMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 15px;
  background-color: ${({ theme }) => theme.colors.cardSecondary};
  border-radius: ${({ theme }) => theme.radii.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    gap: 15px;
    background-color: transparent;
    padding: 0;
  }

  .userInfoBlock {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }

  .fullName {
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: none; /* На десктопе имя прячем, так как там будет работать тултип при наведении на аватар */

      font-size: 1rem;
    }
  }

  button {
    width: 100%;
    padding: 12px;

    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;

    color: ${({ theme }) => theme.colors.textPrimary};

    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.md};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1rem;
    }

    transition: ${({ theme }) => theme.transitions.main};

    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.colors.dangerBg};
      border-color: ${({ theme }) => theme.colors.danger};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: auto;
      padding: 10px 16px;
      border: none;
      background: transparent;

      &:hover {
        color: ${({ theme }) => theme.colors.accent};
        background-color: transparent;
      }
    }
  }
`;

export const UserAvatarWrapper = styled.div`
  position: relative;

  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.radii.rounded};

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 40px;
    height: 40px;
    background: ${({ theme }) => theme.colors.cardSecondary};
    border: none;
  }

  .avatarLetter {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.accent};
  }

  /*  наводим на UserAvatarWrapper -> меняем состояние StyledTooltip */
  &:hover ${StyledTooltip} {
    opacity: 1;
    visibility: visible;
    transform: translateY(-50%) translateX(0);
  }
`;
