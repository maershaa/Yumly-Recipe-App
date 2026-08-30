import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  padding: 60px 20px;
  margin: 0 auto;

  text-align: center;
  width: 100%;
  max-width: 740px;
  min-height: 50vh;

  h2 {
    font-size: 1.1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textSecondary};
    letter-spacing: 0.5px;
    max-width: 420px;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    max-width: 480px;
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    font-size: clamp(1rem, 1.2vw, 1.25rem);
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 64px;
  height: 64px;

  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.rounded};
  border: 1px solid ${({ theme }) => theme.colors.border};

  svg {
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.6;

    width: 40px;
    height: 40px;
  }
`;
