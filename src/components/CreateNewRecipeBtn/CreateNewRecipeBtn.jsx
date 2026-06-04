import { FiPlus } from 'react-icons/fi';
import { Button, Tooltip, Wrapper } from './CreateNewRecipeBtn.styled';

const CreateNewRecipeBtn = ({ onClick, btnText }) => {
  return (
    <Wrapper>
      <Button type="button" aria-label={btnText} onClick={onClick}>
        <FiPlus size={22} />
      </Button>

      <Tooltip>{btnText}</Tooltip>
    </Wrapper>
  );
};

export { CreateNewRecipeBtn };
