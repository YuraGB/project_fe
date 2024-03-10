export type User = {
  id: number;
  name: string;
  dateOfBirth: string;
  password: string;
  email: string;
  phoneNumber: string;
  agreement: boolean;
  createdAt: string;
};

export type TCreateUser = {
  name: string;
  dateOfBirth: string;
  password: string;
  email: string;
  phoneNumber: string;
  agreement: boolean;
};
