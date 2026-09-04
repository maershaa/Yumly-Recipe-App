import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { loginUser } from '@/app/redux/auth/operations';
import { refreshUser } from '@/app/redux/auth/operations';
import { useAppDispatch } from '@/app/redux/hooks';

import { validateLoginForm } from '@/features/auth/helpers';
import { getErrorMessage } from '@/utils';

import { INITIAL_TOUCHED_STATE } from './LogInForm.constants';

import type { ChangeEvent, FocusEvent, SubmitEvent } from 'react';
import type {
  LogInFormState,
  LogInFormTouched,
  LogInFormErrors,
} from '@/types';

export const useLogInForm = () => {
  const initialForm = {
    email: '',
    password: '',
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
      const message = getErrorMessage(error);

      console.error('Login failed:', message);

      if (message === 'Email not confirmed') {
        toast.error('Please confirm your email before logging in.');
      } else if (message === 'Invalid login credentials') {
        toast.error('Invalid email or password.');
      } else {
        toast.error('Failed to log in. Please try again.');
      }
    }
  };

  return {
    loginForm,
    isFormValid,
    showEmailError,
    emailError,
    showPasswordError,
    passwordError,
    handleFormChange,
    handleInputBlur,
    handleSignIn,
  };
};
