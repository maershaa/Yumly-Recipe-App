export interface RegistrationFormState {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type RegistrationFormTouched = Record<
  'userName' | 'email' | 'password' | 'confirmPassword',
  boolean
>;

export interface RegistrationFormErrors {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
