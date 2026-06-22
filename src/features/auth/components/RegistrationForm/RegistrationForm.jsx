import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { Form, RedirectComponent, FieldErrorMessage } from '@/components';
import { registerNewUser } from '@/app/redux/auth/operations';
import { validateRegistrationForm } from '@/features/auth/helpers';

const RegistrationForm = () => {
  const initialForm = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const INITIAL_TOUCHED_STATE = {
    userName: false,
    email: false,
    password: false,
    confirmPassword: false,
  };

  const [registrationForm, setRegistrationForm] = useState(initialForm);
  const [isTouched, setIsTouched] = useState(INITIAL_TOUCHED_STATE);

  const { isFormValid, errors: formErrors } =
    validateRegistrationForm(registrationForm);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFormChange = (evt) => {
    const { name, value } = evt.target;
    setRegistrationForm((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const {
    userName: userNameError,
    email: emailError,
    password: passwordError,
    confirmPassword: confirmPasswordError,
  } = formErrors;

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

  const canSubmit =
    isFormValid &&
    isConfirmPasswordTouched &&
    isPasswordTouched &&
    isUserNameTouched &&
    isEmailTouched;

  const handleSubmit = async (evt) => {
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
      toast.error(error);
      console.error(error);
    }
  };

  const handleInputBlur = (evt) => {
    const { name } = evt.target;
    setIsTouched((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <Form title={'Join Yumly & Start Cooking'} handleSubmit={handleSubmit}>
      <label>
        Login
        <input
          type="text"
          name="userName"
          onChange={handleFormChange}
          onBlur={handleInputBlur}
          value={registrationForm.userName}
          required
          className={showUserNameError ? 'invalid' : ''}
        />
      </label>
      {showUserNameError && <FieldErrorMessage errorMessage={userNameError} />}

      <label>
        Email
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          onChange={handleFormChange}
          onBlur={handleInputBlur}
          value={registrationForm.email}
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
          value={registrationForm.password}
          required
          minLength={6}
          className={showPasswordError ? 'invalid' : ''}
        />
      </label>
      {showPasswordError && <FieldErrorMessage errorMessage={passwordError} />}
      <label>
        Confirm password
        <input
          type="password"
          name="confirmPassword"
          onChange={handleFormChange}
          onBlur={handleInputBlur}
          value={registrationForm.confirmPassword}
          required
          minLength={6}
          className={showConfirmPasswordError ? 'invalid' : ''}
        />
      </label>
      {showConfirmPasswordError && (
        <FieldErrorMessage errorMessage={confirmPasswordError} />
      )}
      <button type="submit" disabled={!canSubmit}>
        Sign in
      </button>

      <RedirectComponent
        spanText={'Already have an account?'}
        linkText={'Sign in'}
        to={'/auth/login'}
      ></RedirectComponent>
    </Form>
  );
};

export { RegistrationForm };
