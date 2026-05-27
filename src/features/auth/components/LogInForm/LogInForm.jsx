import { useState } from 'react';
import { PageTitle } from '@/components';
import { Form, Label, Input, SubmitBtn } from './LogInForm.styled';

const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else return;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const authInfo = {
      email,
      password,
    };

    if (!email || !password) return;
    // auth(authInfo);
    console.log('🚀 ~ handleSubmit ~ authInfo:', authInfo);

    setEmail('');
    setPassword('');
  };
  return (
    <Form autoComplete="on" onSubmit={handleSubmit}>
      <PageTitle title={'Sign in to Yumly'} />

      <Label>
        Email
        <Input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          onChange={handleFormChange}
          value={email}
          required
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          onChange={handleFormChange}
          value={password}
          required
          minLength={4}
        />
      </Label>
      <SubmitBtn type="submit">Sign in</SubmitBtn>
    </Form>
  );
};

export { LogInForm };
