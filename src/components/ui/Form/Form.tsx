import { FormWrapper } from './Form.styled';
import { PageTitle } from '@/components';
import type { ReactNode, SubmitEvent } from 'react';

interface FormProps {
  children: ReactNode;
  handleSubmit: (evt: SubmitEvent<HTMLFormElement>) => void;
  title: string;
}

const Form = ({ children, handleSubmit, title }: FormProps) => {
  return (
    <FormWrapper onSubmit={handleSubmit} autoComplete="off">
      <PageTitle title={title} />

      {children}
    </FormWrapper>
  );
};

export { Form };
