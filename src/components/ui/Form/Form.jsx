import { FormWrapper } from './Form.styled';
import { PageTitle } from '@/components';

const Form = ({ children, handleSubmit, title }) => {
  return (
    <FormWrapper autoComplete="on" onSubmit={handleSubmit}>
      <PageTitle title={title} />

      {children}
    </FormWrapper>
  );
};

export { Form };
