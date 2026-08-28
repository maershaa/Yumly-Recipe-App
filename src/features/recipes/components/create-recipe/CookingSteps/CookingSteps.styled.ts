import styled from 'styled-components';

export const StepRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  margin-bottom: 16px;

  .step-number {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textSecondary};
    padding-top: 10px;
    min-width: 24px;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1.2rem;
      padding-top: 12px;
    }
  }

  textarea {
    flex: 1;
  }

  /* Кнопка удаления */
  button {
    margin-top: 4px;
  }
`;
