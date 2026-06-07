import { Button } from './GeneralBtn.styled';

const GeneralBtn = ({
  type = 'button',
  onClick,
  disabled = false,
  variant = 'primary',
  children,
}) => {
  return (
    <Button type={type} onClick={onClick} disabled={disabled} variant={variant}>
      {children}
    </Button>
  );
};

export { GeneralBtn };
