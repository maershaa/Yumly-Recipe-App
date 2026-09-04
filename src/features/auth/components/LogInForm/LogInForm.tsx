import { Form, RedirectComponent, FieldErrorMessage } from '@/components';
import { useLogInForm } from './useLogInForm';

const LogInForm = () => {
  const {
    loginForm,
    isFormValid,
    showEmailError,
    emailError,
    showPasswordError,
    passwordError,
    handleFormChange,
    handleInputBlur,
    handleSignIn,
  } = useLogInForm();

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
