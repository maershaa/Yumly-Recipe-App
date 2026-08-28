import { FiPlus } from 'react-icons/fi';
import { Button, Wrapper } from './CreateButton.styled';
import { Tooltip } from '@/components';

interface CreateButtonProps {
  onClick: () => void;
  btnText: string;
}

const CreateButton = ({ onClick, btnText }: CreateButtonProps) => {
  return (
    <Wrapper>
      <Button type="button" aria-label={btnText} onClick={onClick}>
        <FiPlus size={22} />
      </Button>

      <Tooltip text={btnText}></Tooltip>
    </Wrapper>
  );
};

export { CreateButton };
