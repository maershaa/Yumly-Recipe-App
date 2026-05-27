import { useState } from 'react';
import { Form } from '@/components';

const RegistrationForm = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormChange = (evt) => {
    const { name, value } = evt.target;
    if (name === 'userName') {
      setUserName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else return;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const userInfo = {
      userName,
      email,
      password,
    };

    if (!userName || !email || !password) return;

    console.log('🚀 ~ handleSubmit ~ userInfo:', userInfo);
  };

  return (
    <Form title={'Join Yumly & Start Cooking'} handleSubmit={handleSubmit}>
      <label>
        Login
        <input
          type="text"
          name="userName"
          onChange={handleFormChange}
          value={userName}
          required
        />
      </label>

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

export { RegistrationForm };
