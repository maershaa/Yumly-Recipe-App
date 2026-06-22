const validateUserEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePassword = (password) => password?.length >= 6;

export const validateLoginForm = (form) => {
  const emailValid = validateUserEmail(form.email);
  const passwordValid = validatePassword(form.password);
  const isFormValid = emailValid && passwordValid;

  return {
    isFormValid,
    errors: {
      email: !emailValid
        ? 'Enter your email in the format name@google.com'
        : '',
      password: !passwordValid
        ? 'Password must be at least 6 characters long.'
        : '',
    },
  };
};
