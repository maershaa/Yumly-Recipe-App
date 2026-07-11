import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  padding: 60px 20px;
  text-align: center;
  width: 100%;
  max-width: 740px;
`;

export const IconWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};

  width: 64px;
  height: 64px;
  border-radius: ${({ theme }) => theme.radii.rounded};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};

  svg {
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.6;
  }
`;

export const Title = styled.h3`
  margin: 0 0 8px;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const MessageText = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
  letter-spacing: 0.5px;

  max-width: 420px;
`;

export const Divider = styled.div`
  width: 50px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.accent};

  border-radius: 2px;
  opacity: 0.5;
`;

export const RetryButton = styled.button`
  margin-top: 12px;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;

  border: 2px solid ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.dangerBg};

  transition: ${({ theme }) => theme.transitions.main};

  &:hover {
    background-color: ${({ theme }) => theme.colors.dangerHover};
    box-shadow: ${({ theme }) => theme.colors.hoverShadowDanger};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.danger};
    outline-offset: 2px;
  }
`;
