import { PageTitle } from '@/components';
import { Header } from './PageHeader.styled';
const PageHeader = ({ children, title }) => {
  return (
    <Header>
      <PageTitle title={title} />
      {children}
    </Header>
  );
};

export { PageHeader };
