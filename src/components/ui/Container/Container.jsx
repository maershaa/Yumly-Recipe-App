import { ContainerWrapper } from './Container.styled';

const Container = ({ children, className }) => {
  return <ContainerWrapper className={className}>{children}</ContainerWrapper>;
};

export { Container };
