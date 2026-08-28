import { ContainerWrapper } from './Container.styled';
import { JSX } from 'react';

interface ContainerProps {
  children: JSX.Element;
  className?: string;
}
export const Container = ({ children, className }: ContainerProps) => {
  return <ContainerWrapper className={className}>{children}</ContainerWrapper>;
};
