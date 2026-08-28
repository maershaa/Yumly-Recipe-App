import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 24px auto;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 24px;
    margin: 40px auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-width: 700px;
    max-width: 70%;
  }

  .invalid {
    border: 1px solid ${({ theme }) => theme.colors.danger};
    box-shadow: ${({ theme }) => theme.colors.hoverShadowDanger};

    &:hover,
    &:focus-within {
      border-color: ${({ theme }) =>
        theme.colors.dangerHover || theme.colors.danger};
      box-shadow: ${({ theme }) => theme.colors.hoverShadowDanger};
    }
  }
`;

export const FormSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  width: 100%;
  padding: 20px;

  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 32px;
  }

  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 1rem;
    font-weight: 500;
  }

  /* Стили для базовых инпутов формы */
  input,
  select,
  textarea {
    width: 100%;
    padding: 12px 16px;
    font-size: 1rem;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.md};
    color: ${({ theme }) => theme.colors.textPrimary};
    outline: none;
    transition: ${({ theme }) => theme.transitions.main};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: 14px 18px;
    }

    &:hover,
    &:focus {
      border-color: ${({ theme }) => theme.colors.hoverBorderAccent};
      box-shadow: ${({ theme }) => theme.colors.hoverShadowAccent};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }

  select {
    cursor: pointer;
    option {
      background-color: ${({ theme }) => theme.colors.surface};
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

export const FormStepsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: 6;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 680px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 56px;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin-top: 24px;
  padding: 18px;

  border: none;
  border-radius: ${({ theme }) => theme.radii.lg};
  background-color: ${({ theme }) => theme.colors.accentSecondary};
  color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.main};

  &:hover {
    box-shadow: ${({ theme }) => theme.colors.hoverShadowSecondary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
