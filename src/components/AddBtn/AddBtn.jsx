import { FiPlus } from 'react-icons/fi';
import { Button, Tooltip, Wrapper } from './AddBtn.styled';

const AddBtn = ({ onClick, btnText, size = 22 }) => {
  return (
    <Wrapper>
      <Button type="button" aria-label={btnText} onClick={onClick}>
        <FiPlus size={size} />
      </Button>

      <Tooltip>{btnText}</Tooltip>
    </Wrapper>
  );
};

export { AddBtn };
