import { HiOutlineLightBulb } from 'react-icons/hi';
import { ErrorMessage } from './FieldErrorMessage.styled';
const FieldErrorMessage = ({ errorMessage }) => {
  return (
    <ErrorMessage>
      <HiOutlineLightBulb size={28} />
      <span>{errorMessage} </span>
    </ErrorMessage>
  );
};

export { FieldErrorMessage };
