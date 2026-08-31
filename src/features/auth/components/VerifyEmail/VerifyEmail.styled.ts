import styled from 'styled-components';

export const VerifyEmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  padding: 60px 20px;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  max-width: 740px;

  h1 {
    margin: 0 0 8px;
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  div {
    background-color: ${({ theme }) => theme.colors.surface};

    width: 84px;
    height: 84px;
    border-radius: ${({ theme }) => theme.radii.rounded};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    border: 1px solid ${({ theme }) => theme.colors.border};

    svg {
      color: ${({ theme }) => theme.colors.accent};
      opacity: 0.6;
    }
  }

  p {
    margin: 0 0 8px;
    font-size: 1.5rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  span {
    font-weight: 700;
  }
`;
