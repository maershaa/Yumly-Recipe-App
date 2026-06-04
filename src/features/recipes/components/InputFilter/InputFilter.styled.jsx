import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  margin: 50px auto;
  width: 100%;
  max-width: 500px;
`;

export const SearchIcon = styled.div`
  position: absolute;

  left: 16px;
  top: 50%;

  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.textSecondary};

  pointer-events: none;
`;

export const Input = styled.input`
  width: 100%;

  padding: 14px 16px 14px 48px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};

  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};

  font-size: 1rem;

  &:focus {
    outline: none;

    border-color: ${({ theme }) => theme.colors.accent};

    box-shadow: ${({ theme }) => theme.colors.hoverShadowAccent};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
