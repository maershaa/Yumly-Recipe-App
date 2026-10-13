import { Form, RedirectComponent, FieldErrorMessage } from '@/components';
import { useRegistrationForm } from './useRegistrationForm';

const RegistrationForm = () => {
  const {
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
  } = useRegistrationForm();
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
          autoComplete="username"
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
          autoComplete="email"
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
          autoComplete="new-password"
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
          autoComplete="new-password"
        />
      </label>
      {showConfirmPasswordError && (
        <FieldErrorMessage errorMessage={confirmPasswordError} />
      )}
      <button type="submit" disabled={!canSubmit}>
        Create account
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
