import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 50px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

const IconWrapper = styled.div`
  width: 72px;
  height: 72px;
  margin-bottom: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.rounded};

  svg {
    color: ${({ theme }) => theme.colors.accent};
    opacity: 0.6;

    width: 32px;
    height: 32px;
  }
`;

const Title = styled.h3`
  margin: 0 0 20px 0;

  font-size: 1.5rem;
  font-weight: 600;

  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Description = styled.p`
  max-width: 420px;

  margin: 0;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 1rem;
  line-height: 1.6;
`;

export { Container, IconWrapper, Title, Description };
