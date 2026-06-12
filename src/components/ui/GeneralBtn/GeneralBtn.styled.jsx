import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: ${({ theme }) => theme.radii.md};
  font-weight: 600;

  transition: ${({ theme }) => theme.transitions.main};

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  ${({ variant, theme }) =>
    variant === 'add' &&
    css`
      width: 100%;
      padding: 16px;
      background-color: ${theme.colors.accent};
      color: ${theme.colors.background};
      border: 1px solid transparent;

      &:hover:not(:disabled) {
        background-color: ${theme.colors.accentSecondary};
        border: ${theme.colors.hoverBorderSecondary};
        box-shadow: ${theme.colors.hoverShadowSecondary};
      }
    `}

  ${({ variant, theme }) =>
    variant === 'delete' &&
    css`
      width: 44px;
      height: 44px;
      flex-shrink: 0;
      padding: 0;
      background-color: ${theme.colors.cardSecondary};
      color: ${theme.colors.textSecondary};
      border: 1px solid ${theme.colors.border};

      &:hover:not(:disabled) {
        color: ${theme.colors.accentSecondary};
        border: ${theme.colors.accentSecondary};
      }
    `}

 ${({ variant, theme }) =>
    variant === 'submit' &&
    css`
      width: 100%;
      max-width: 400px;

      margin: 32px auto 0;

      padding: 18px 24px;

      font-size: 1.3rem;
      font-weight: 700;

      background-color: ${theme.colors.accentSecondary};
      color: ${theme.colors.background};

      box-shadow: 0 8px 24px rgba(248, 184, 98, 0.2);

      &:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: ${theme.colors.hoverShadowSecondary};
      }
    `}
`;
