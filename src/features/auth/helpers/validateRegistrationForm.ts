import type { RegistrationFormState, RegistrationFormErrors } from '@/types';

interface ValidationErrorsType {
  isFormValid: boolean;
  errors: RegistrationFormErrors;
}

const validateUserName = (name: string) => name.trim().length >= 3;
const validateUserEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePassword = (password: string) => password.length >= 6;
const validateConfirmPassword = (password: string, confirmPassword: string) =>
  password === confirmPassword;

export const validateRegistrationForm = (
  form: RegistrationFormState,
): ValidationErrorsType => {
  const nameValid = validateUserName(form.userName);
  const emailValid = validateUserEmail(form.email);
  const passwordValid = validatePassword(form.password);
  const confirmPasswordValid = validateConfirmPassword(
    form.password,
    form.confirmPassword,
  );

  const isFormValid =
    nameValid && emailValid && passwordValid && confirmPasswordValid;

  return {
    isFormValid,
    errors: {
      userName: !nameValid ? 'Name must be at least 3 characters long.' : '',
      email: !emailValid
        ? 'Enter your email in the format name@google.com'
        : '',
      password: !passwordValid
        ? 'Password must be at least 6 characters long.'
        : '',
      confirmPassword: !confirmPasswordValid ? 'Passwords are different' : '',
    },
  };
};
