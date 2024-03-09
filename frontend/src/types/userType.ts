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

export type ThisUser = {
  name: string;
  status: boolean;
}

export type UpdateThisUser = {
  UpdateName: (name: ThisUser['name']) => void;
  UpdateStatus: (status: ThisUser['status']) => void;
}