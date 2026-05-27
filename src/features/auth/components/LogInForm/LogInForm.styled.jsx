import styled from 'styled-components';

export const Form = styled.form`
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
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 14px 18px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.textPrimary};
  outline: none;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    border: ${({ theme }) => theme.colors.hoverBorderAccent};
    box-shadow: ${({ theme }) => theme.colors.hoverShadowAccent};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const SubmitBtn = styled.button`
  margin-top: 10px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.md};
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentSecondary};
    border: ${({ theme }) => theme.colors.hoverBorderSecondary};
    box-shadow: ${({ theme }) => theme.colors.hoverShadowSecondary};
  }
`;
