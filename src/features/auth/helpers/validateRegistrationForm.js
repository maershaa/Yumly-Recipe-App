const validateUserName = (name) => name?.trim().length >= 3;
const validateUserEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePassword = (password) => password?.length >= 6;
const validateConfirmPassword = (password, confirmPassword) =>
  password === confirmPassword;

export const validateRegistrationForm = (form) => {
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
