export interface RegisterFormData {
  userName: string;
  email: string;
  password: string;
}

export type LoginFormData = Pick<RegisterFormData, 'email' | 'password'>;

export interface User {
  id: string;
  name: string;
  email: string;
}
