import { ContainerWrapper } from './Container.styled';

export const Container = ({ children, className }) => {
  return <ContainerWrapper className={className}>{children}</ContainerWrapper>;
};
