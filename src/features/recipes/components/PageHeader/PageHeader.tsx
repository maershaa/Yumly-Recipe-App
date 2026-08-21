import { PageTitle } from '@/components';
import { Header } from './PageHeader.styled';
import { JSX } from 'react/jsx-dev-runtime';

interface PageHeaderProps {
  children: JSX.Element;
  title: string;
}

const PageHeader = ({ children, title }: PageHeaderProps) => {
  return (
    <Header>
      <PageTitle title={title} />
      {children}
    </Header>
  );
};

export { PageHeader };
