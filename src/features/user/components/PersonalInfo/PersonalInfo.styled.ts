import styled from 'styled-components';

export const PersonalInfoSection = styled.section`
  margin-top: 70px;

  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: stretch;

  header {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    justify-content: left;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: start;

    padding: 24px;
    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.lg};
  }

  p {
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: baseline;
    justify-content: flex-start;
  }
`;
