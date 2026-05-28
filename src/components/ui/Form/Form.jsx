import { FormWrapper } from './Form.styled';
import { PageTitle } from '@/components';

const Form = ({ children, handleSubmit, title }) => {
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <PageTitle title={title} />

      {children}
    </FormWrapper>
  );
};

export { Form };
