import { useState } from 'react';
import { Form, RedirectComponent } from '@/components';
import { useDispatch } from 'react-redux';
import { loginUser } from '@/app/redux/auth/operations';
import { useNavigate } from 'react-router-dom';

const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormChange = (evt) => {
    const { name, value } = evt.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else return;
  };

  const handleSignIn = async (evt) => {
    evt.preventDefault();

    if (!email || !password) return;

    const authInfo = {
      email,
      password,
    };

    try {
      await dispatch(loginUser(authInfo)).unwrap();
      // dispatch()→ возвращает action
      // dispatch().unwrap() → возвращает данные или бросает ошибку
      setEmail('');
      setPassword('');
      navigate('/my-recipes');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Form title={'Sign in to Yumly'} handleSubmit={handleSignIn}>
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
        spanText={'New to Yumly?'}
        linkText={'Create an account'}
        to={'/auth/register'}
      ></RedirectComponent>
    </Form>
  );
};

export { LogInForm };
