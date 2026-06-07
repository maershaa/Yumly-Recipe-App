import { TooltipContent } from './Tooltip.styled';

const Tooltip = ({ text, className }) => {
  return <TooltipContent className={className}>{text}</TooltipContent>;
};

export { Tooltip };
