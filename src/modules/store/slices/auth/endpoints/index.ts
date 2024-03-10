import { apiSlice } from "@/modules/servises/auth";
import { type TLoginUserData } from "@/modules/store/slices/auth/endpoints/types.ts";
import { type TCreateUser, type User } from "@/modules/servises/auth/types.ts";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (data: TLoginUserData) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...data },
      }),
    }),
    register: build.mutation<User & { accessToken: string }, TCreateUser>({
      query: (data: TCreateUser) => ({
        url: "/auth/signUp",
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApiSlice;
