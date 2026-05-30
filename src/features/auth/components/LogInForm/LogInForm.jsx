import { useState } from 'react';
import { Form } from '@/components';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '@/app/redux/auth/operations';
import { Link, useNavigate } from 'react-router-dom';
// import { selectToken } from '@/app/redux/auth/selectors';

const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const token = useSelector(selectToken);

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

    dispatch(loginUser(authInfo));

    setEmail('');
    setPassword('');

    // token;
    // dispatch(selectToken);

    navigate('/my-recipes');
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

      <p>
        Еще нет аккаунта?
        <Link to={'auth/register'}>Зрегистрируйся.</Link>
      </p>
    </Form>
  );
};

export { LogInForm };
