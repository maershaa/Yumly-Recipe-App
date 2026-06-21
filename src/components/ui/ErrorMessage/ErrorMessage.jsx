import {
  ErrorContainer,
  IconWrapper,
  MessageText,
  Divider,
  RetryButton,
  Title,
} from './ErrorMessage.styled';
import { BackButton } from '@/components';
import { FaClapperboard } from 'react-icons/fa6';

const ErrorMessage = ({ message = 'Please try again later', onRetry }) => {
  return (
    <ErrorContainer>
      <IconWrapper>
        <FaClapperboard size={32} />
      </IconWrapper>
      <Title>Something went wrong</Title>
      <MessageText>{message}</MessageText>
      {onRetry && (
        <RetryButton type="button" onClick={onRetry}>
          Try again
        </RetryButton>
      )}

      <BackButton />
      <Divider />
    </ErrorContainer>
  );
};

export { ErrorMessage };
