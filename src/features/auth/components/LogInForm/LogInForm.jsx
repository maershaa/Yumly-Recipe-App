import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { Form, RedirectComponent, FieldErrorMessage } from '@/components';
import { loginUser } from '@/app/redux/auth/operations';
import { refreshUser } from '@/app/redux/auth/operations';

import { validateLoginForm } from '@/features/auth/helpers';

const LogInForm = () => {
  const initialForm = {
    email: '',
    password: '',
  };

  const INITIAL_TOUCHED_STATE = {
    email: false,
    password: false,
  };

  const [loginForm, setLoginForm] = useState(initialForm);
  const [isTouched, setIsTouched] = useState(INITIAL_TOUCHED_STATE);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isFormValid, errors: formErrors } = validateLoginForm(loginForm);

  const { email: emailError, password: passwordError } = formErrors;

  const { email: isEmailTouched, password: isPasswordTouched } = isTouched;

  const showEmailError = emailError && isEmailTouched;
  const showPasswordError = passwordError && isPasswordTouched;

  const handleFormChange = (evt) => {
    const { name, value } = evt.target;

    setLoginForm((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleInputBlur = (evt) => {
    const { name } = evt.target;
    setIsTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSignIn = async (evt) => {
    evt.preventDefault();

    if (!isFormValid) return;

    const prepareFormToSubmit = {
      email: loginForm.email.trim(),
      password: loginForm.password,
    };

    try {
      await dispatch(loginUser(prepareFormToSubmit)).unwrap();
      // dispatch()→ возвращает action
      // dispatch().unwrap() → возвращает данные или бросает ошибку
      setLoginForm(initialForm);

      navigate('/my-recipes');
      dispatch(refreshUser());
    } catch (error) {
      setLoginForm(initialForm);
      if (error === 'Email not confirmed') {
        toast.error(error);
      } else if (error === 'Invalid login credentials') {
        toast.error('Invalid email or password');
      } else {
        toast.error(error);
      }
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
          onBlur={handleInputBlur}
          value={loginForm.email}
          required
          className={showEmailError ? 'invalid' : ''}
        />
      </label>
      {showEmailError && <FieldErrorMessage errorMessage={emailError} />}

      <label>
        Password
        <input
          type="password"
          name="password"
          onChange={handleFormChange}
          onBlur={handleInputBlur}
          value={loginForm.password}
          required
          minLength={6}
          className={showPasswordError ? 'invalid' : ''}
        />
      </label>
      {showPasswordError && <FieldErrorMessage errorMessage={passwordError} />}

      <button type="submit" disabled={!isFormValid}>
        Sign in
      </button>

      <RedirectComponent
        spanText={'New to Yumly?'}
        linkText={'Create an account'}
        to={'/auth/register'}
      ></RedirectComponent>
    </Form>
  );
};

export { LogInForm };
