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

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}
const ErrorMessage = ({
  message = 'Please try again later',
  onRetry,
}: ErrorMessageProps) => {
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
