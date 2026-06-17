import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  padding: 60px 20px;
  text-align: center;
  width: 100%;
`;

const IconWrapper = styled.div`
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

const Title = styled.h3`
  margin: 0 0 8px;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const MessageText = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
  letter-spacing: 0.5px;

  max-width: 420px;
`;

const Divider = styled.div`
  width: 50px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.accent};

  border-radius: 2px;
  opacity: 0.5;
`;

const RetryButton = styled.button`
  margin-top: 12px;
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: #ff4d4f;
  color: white;

  transition: ${({ theme }) => theme.transitions.main};

  &:hover {
    filter: brightness(0.75);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }
`;

export {
  ErrorContainer,
  IconWrapper,
  Title,
  MessageText,
  Divider,
  RetryButton,
};
