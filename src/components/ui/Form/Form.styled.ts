import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.main};

  .invalid {
    //для невалидных полей формы
    border: 1px solid ${({ theme }) => theme.colors.danger};
    box-shadow: ${({ theme }) => theme.colors.hoverShadowDanger};

    &:hover {
      border: ${({ theme }) => theme.colors.dangerHover};
      box-shadow: ${({ theme }) => theme.colors.hoverShadowDanger};
    }
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 500;
  }

  input {
    padding: 14px 18px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.md};
    color: ${({ theme }) => theme.colors.textPrimary};
    outline: none;
    transition: ${({ theme }) => theme.transitions.main};

    &:hover,
    &:focus {
      border: ${({ theme }) => theme.colors.hoverBorderAccent};
      box-shadow: ${({ theme }) => theme.colors.hoverShadowAccent};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }

  button {
    margin-top: 10px;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.background};
    border-radius: ${({ theme }) => theme.radii.md};
    font-weight: 600;

    transition: ${({ theme }) => `
    background-color ${theme.transitions.main},
    box-shadow ${theme.transitions.main},
    border ${theme.transitions.main},
  `};
    &:hover {
      background-color: ${({ theme }) => theme.colors.accentSecondary};
      border: ${({ theme }) => theme.colors.hoverBorderSecondary};
      box-shadow: ${({ theme }) => theme.colors.hoverShadowSecondary};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.background};
      cursor: not-allowed;
      opacity: 0.6;
      box-shadow: none;
      pointer-events: none;
    }
  }
`;
