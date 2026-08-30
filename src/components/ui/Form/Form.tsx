import { FormWrapper } from './Form.styled';
import { PageTitle } from '@/components';
import type { JSX, SubmitEvent } from 'react';

interface FormProps {
  children: JSX.Element;
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
