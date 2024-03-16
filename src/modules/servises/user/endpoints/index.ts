import { userApiSlice } from "@/modules/servises/user";
import { type StoreUser } from "@/modules/servises/auth/endpoints/types.ts";

export const authApiSlice = userApiSlice.injectEndpoints({
  endpoints: (_build) => ({
    updateUserInfo: _build.mutation<StoreUser, StoreUser>({
      query: (data) => ({
        url: "/user/update",
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const { useUpdateUserInfoMutation } = authApiSlice;
