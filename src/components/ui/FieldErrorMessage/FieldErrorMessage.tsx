import { HiOutlineLightBulb } from 'react-icons/hi';
import { ErrorMessage } from './FieldErrorMessage.styled';

interface FieldErrorMessageProps {
  errorMessage: string;
}

const FieldErrorMessage = ({ errorMessage }: FieldErrorMessageProps) => {
  return (
    <ErrorMessage>
      <HiOutlineLightBulb size={28} />
      <span>{errorMessage} </span>
    </ErrorMessage>
  );
};

export { FieldErrorMessage };
