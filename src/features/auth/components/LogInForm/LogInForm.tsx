import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { Form, RedirectComponent, FieldErrorMessage } from '@/components';
import { loginUser } from '@/app/redux/auth/operations';
import { refreshUser } from '@/app/redux/auth/operations';
import { useAppDispatch } from '@/app/redux/hooks';

import { validateLoginForm } from '@/features/auth/helpers';
import { getErrorMessage } from '@/features/recipes/utils';

import type { ChangeEvent, FocusEvent, SubmitEvent } from 'react';

import type {
  LogInFormState,
  LogInFormTouched,
  LogInFormErrors,
} from '@/types';

const LogInForm = () => {
  const initialForm = {
    email: '',
    password: '',
  };

  const INITIAL_TOUCHED_STATE = {
    email: false,
    password: false,
  };

  const [loginForm, setLoginForm] = useState<LogInFormState>(initialForm);
  const [isTouched, setIsTouched] = useState<LogInFormTouched>(
    INITIAL_TOUCHED_STATE,
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isFormValid, errors: formErrors } = validateLoginForm(loginForm);

  const { email: emailError, password: passwordError }: LogInFormErrors =
    formErrors;

  const { email: isEmailTouched, password: isPasswordTouched } = isTouched;

  const showEmailError = emailError && isEmailTouched;
  const showPasswordError = passwordError && isPasswordTouched;

  const handleFormChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setLoginForm((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleInputBlur = (evt: FocusEvent<HTMLInputElement>) => {
    const { name } = evt.target;
    setIsTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSignIn = async (evt: SubmitEvent<HTMLFormElement>) => {
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
      toast.success('You are successfully logged in');
    } catch (error) {
      setLoginForm(initialForm);

      const message = getErrorMessage(error);
      console.error(message);

      if (message === 'Email not confirmed') {
        toast.error(message);
      } else if (message === 'Invalid login credentials') {
        toast.error('Invalid email or password');
      } else {
        toast.error(message);
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
