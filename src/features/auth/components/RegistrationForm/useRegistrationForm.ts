import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { registerNewUser } from '@/app/redux/auth/operations';
import { validateRegistrationForm } from '@/features/auth/helpers';
import { useAppDispatch } from '@/app/redux/hooks';
import { getErrorMessage } from '@/utils';
import { INITIAL_TOUCHED_STATE } from './RegistrationForm.constants';

import type {
  RegistrationFormState,
  RegistrationFormTouched,
  RegistrationFormErrors,
} from '@/types';
import type { SubmitEvent, ChangeEvent, FocusEvent } from 'react';

export const useRegistrationForm = () => {
  const initialForm = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [registrationForm, setRegistrationForm] =
    useState<RegistrationFormState>(initialForm);
  const [isTouched, setIsTouched] = useState<RegistrationFormTouched>(
    INITIAL_TOUCHED_STATE,
  );

  const { isFormValid, errors: formErrors } =
    validateRegistrationForm(registrationForm);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleFormChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setRegistrationForm((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const {
    userName: userNameError,
    email: emailError,
    password: passwordError,
    confirmPassword: confirmPasswordError,
  }: RegistrationFormErrors = formErrors;

  const {
    userName: isUserNameTouched,
    email: isEmailTouched,
    password: isPasswordTouched,
    confirmPassword: isConfirmPasswordTouched,
  } = isTouched;

  const showUserNameError = userNameError && isUserNameTouched;
  const showEmailError = emailError && isEmailTouched;
  const showPasswordError = passwordError && isPasswordTouched;
  const showConfirmPasswordError =
    confirmPasswordError && isConfirmPasswordTouched;

  const canSubmit = isFormValid && isConfirmPasswordTouched; //форма может автозаполнится но второй пароль внеси будь любезен сам

  const handleSubmit = async (evt: SubmitEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!isFormValid) return;

    const prepareFormToSubmit = {
      userName: registrationForm.userName.trim(),
      email: registrationForm.email.trim(),
      password: registrationForm.password,
    };

    try {
      await dispatch(registerNewUser(prepareFormToSubmit)).unwrap();
      // dispatch()→ возвращает action
      // dispatch().unwrap() → возвращает данные или бросает ошибку
      setRegistrationForm(initialForm);
      navigate('/auth/verify-email');
    } catch (error) {
      console.error('Failed to register user:', getErrorMessage(error));
      toast.error('Failed to create your account. Please try again.');
    }
  };

  const handleInputBlur = (evt: FocusEvent<HTMLInputElement>) => {
    const { name } = evt.target;
    setIsTouched((prev) => ({ ...prev, [name]: true }));
  };

  return {
    registrationForm,
    handleFormChange,
    showUserNameError,
    userNameError,
    showEmailError,
    emailError,
    showPasswordError,
    passwordError,
    showConfirmPasswordError,
    confirmPasswordError,
    canSubmit,
    handleSubmit,
    handleInputBlur,
  };
};
