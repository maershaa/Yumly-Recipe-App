import { Button } from './GeneralBtn.styled';
import { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonTypes = 'button' | 'submit' | 'reset';
type ButtonVariants = 'submit' | 'add' | 'delete' | 'loadMore';

interface GeneralBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: ButtonTypes;
  onClick?: () => void;
  disabled?: boolean;
  variant: ButtonVariants;
  children: ReactNode;
}

const GeneralBtn = ({
  type = 'button',
  onClick,
  disabled = false,
  variant,
  children,
}: GeneralBtnProps) => {
  return (
    <Button type={type} onClick={onClick} disabled={disabled} variant={variant}>
      {children}
    </Button>
  );
};

export { GeneralBtn };
