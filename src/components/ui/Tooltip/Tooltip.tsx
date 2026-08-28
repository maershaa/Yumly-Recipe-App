import { TooltipContent } from './Tooltip.styled';

interface TooltipProps {
  className?: string;
  text: string;
}

const Tooltip = ({ text, className }: TooltipProps) => {
  return <TooltipContent className={className}>{text}</TooltipContent>;
};

export { Tooltip };
