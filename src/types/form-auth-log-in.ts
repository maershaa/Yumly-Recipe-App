export interface LogInFormState {
  email: string;
  password: string;
}

export type LogInFormTouched = Record<'email' | 'password', boolean>;

export interface LogInFormErrors {
  email: string;
  password: string;
}
