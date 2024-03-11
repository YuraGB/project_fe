import { type User } from "@/modules/servises/auth/types.ts";

export type TLoginUserData = {
  email: string;
  password: string;
};

export type StoreUser = Omit<User, "password" | "createdAt">;

export type TCreatedUser = {
  user: StoreUser;
  token: string;
};

export type TLoginMutation = {
  email: string;
  password: string;
};

export type TLogoutMutation = {
  message: string;
};

export type TReturnMutationUser = User & { accessToken: string };
