import { useState } from 'react';
import { Form } from '@/components';
import { registerNewUser } from '@/app/redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
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

    dispatch(registerNewUser(userInfo));

    // !Сделать страничку или модалку лучше для ситуации этой?
    alert('Please check yout email to varify your account. Then Login');

    setUserName('');
    setEmail('');
    setPassword('');
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

      <p>
        ЕУже есть аккаунт?
        <Link to={'auth/login'}>Жми вход..</Link>{' '}
      </p>
    </Form>
  );
};

export { RegistrationForm };
