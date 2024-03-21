import { apiSlice } from "@/modules/servises/auth";
import {
  type TLoginUserData,
  type TLogoutMutation,
  type TReturnMutationUser,
  type TVerifyTokenResponse,
} from "@/modules/servises/auth/endpoints/types.ts";
import { type TCreateUser } from "@/modules/servises/auth/types.ts";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<
      TReturnMutationUser,
      { email: string; password: string }
    >({
      query: (data: TLoginUserData) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...data },
      }),
    }),
    logout: build.mutation<TLogoutMutation, undefined>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    verifyToken: build.query<TVerifyTokenResponse, undefined>({
      query: () => ({
        url: "/refreshToken",
        method: "GET",
      }),
    }),
    register: build.mutation<TReturnMutationUser, TCreateUser>({
      query: (data: TCreateUser) => ({
        url: "/auth/signUp",
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useLazyVerifyTokenQuery,
  useVerifyTokenQuery,
} = authApiSlice;
