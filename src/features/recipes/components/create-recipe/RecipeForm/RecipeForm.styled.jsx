import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 32px auto;

  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-start;
    gap: 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 32px;
  }

  .invalid {
    //для невалидных полей формы
    border: 1px solid ${({ theme }) => theme.colors.danger};
    box-shadow: ${({ theme }) => theme.colors.hoverShadowDanger};

    &:hover {
      border: ${({ theme }) => theme.colors.dangerHover};
      box-shadow: ${({ theme }) => theme.colors.hoverShadowDanger};
    }
  }
`;

export const FormSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};

  padding: 20px;

  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 28px;
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
    font-weight: 500;
  }

  input,
  select {
    width: 100%;
    padding: 14px 18px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.md};
    color: ${({ theme }) => theme.colors.textPrimary};
    outline: none;

    transition: ${({ theme }) => theme.transitions.main};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex: 1;
    }

    &:hover,
    &:focus {
      border: ${({ theme }) => theme.colors.hoverBorderAccent};
      box-shadow: ${({ theme }) => theme.colors.hoverShadowAccent};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.textSecondary};
    }

    option {
      color: ${({ theme }) => theme.colors.textPrimary};
      font-weight: 500;
    }
  }

  textarea {
    width: 100%;
    padding: 14px 18px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.md};
    color: ${({ theme }) => theme.colors.textPrimary};
    resize: vertical;
    outline: none;

    &:hover,
    &:focus {
      border: ${({ theme }) => theme.colors.hoverBorderAccent};
      box-shadow: ${({ theme }) => theme.colors.hoverShadowAccent};
    }
  }
`;

export const FormMainSection = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;

  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 500px;
  }
`;

export const FormStepsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: 1;
    max-width: 700px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 56px;

  font-size: 16px;
  font-weight: 700;

  display: flex;

  margin-top: 24px auto;
  padding: 18px;
  font-size: 16px;
  font-weight: 700;

  border-radius: ${({ theme }) => theme.radii.lg};
  background-color: ${({ theme }) => theme.colors.accentSecondary};
  color: ${({ theme }) => theme.colors.background};

  &:hover {
    box-shadow: ${({ theme }) => theme.colors.hoverShadowSecondary};
  }
`;
