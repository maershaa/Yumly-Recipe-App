import { Title } from './PageTitle.styled';

interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return <Title>{title}</Title>;
};

export { PageTitle };
