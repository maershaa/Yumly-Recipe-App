import { useState } from 'react';
import { Form, RedirectComponent } from '@/components';
import { registerNewUser } from '@/app/redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
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

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const userInfo = {
      userName,
      email,
      password,
    };

    if (!userName || !email || !password) return;

    try {
      await dispatch(registerNewUser(userInfo)).unwrap();
      // dispatch()→ возвращает action
      // dispatch().unwrap() → возвращает данные или бросает ошибку
      setUserName('');
      setEmail('');
      setPassword('');
      navigate('/auth/check-email');
    } catch (error) {
      console.error(error);
    }
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

      <RedirectComponent
        spanText={'Already have an account?'}
        linkText={'Sign in'}
        to={'/auth/login'}
      ></RedirectComponent>
    </Form>
  );
};

export { RegistrationForm };
