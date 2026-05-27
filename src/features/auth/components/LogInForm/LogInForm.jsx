import { useState } from 'react';
import { Form } from '@/components';

const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormChange = (evt) => {
    const { name, value } = evt.target;
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
    <Form title={'Sign in to Yumly'} handleSubmit={handleSubmit}>
      <label>
        Email
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          onChange={handleFormChange}
          value={email}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          onChange={handleFormChange}
          value={password}
          required
          minLength={4}
        />
      </label>
      <button type="submit">Sign in</button>
    </Form>
  );
};

export { LogInForm };
