export type CreateUserType = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export type LoginUserType = {
  name: string;
  password: string;
}