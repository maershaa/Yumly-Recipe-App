import { FormWrapper } from './Form.styled';
import { PageTitle } from '@/components';

const Form = ({ children, handleSubmit, title }) => {
  return (
    <FormWrapper onSubmit={handleSubmit} autoComplete="off">
      <PageTitle title={title} />

      {children}
    </FormWrapper>
  );
};

export { Form };
