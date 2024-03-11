import {
  type BaseQueryFn,
  createApi,
  type FetchArgs,
  fetchBaseQuery,
  type FetchBaseQueryError,
  type FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query/react";

import {
  setCredentials,
  logout,
  type TSliceState,
} from "@/modules/store/slices/auth/authSlice.ts";
import { type TRefreshTokenSuccess } from "@/modules/servises/auth/types.ts";
import { setTokenToLocalStorage } from "@/modules/servises/util/setHeadesAuth.ts";
// eslint-disable-next-line
// @ts-ignore
import { type QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";

// Define a service using a base URL and expected endpoints
const baseQuery = fetchBaseQuery({
  baseUrl: "http://127.0.0.1:3000",
  // credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as { auth: TSliceState }).auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    } else {
      const tokenFromLocalStorage = localStorage.getItem("token");
      if (tokenFromLocalStorage) {
        headers.set("authorization", `Bearer ${tokenFromLocalStorage}`);
      }
    }

    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // try to get a new token
    const refreshResult: QueryReturnValue<
      TRefreshTokenSuccess,
      FetchBaseQueryError,
      FetchBaseQueryMeta
    > = await baseQuery("/refreshToken", api, extraOptions);

    if (refreshResult.data?.accessToken) {
      const user = (api.getState() as { auth: TSliceState }).auth.user;
      if (!user) {
        api.dispatch(logout());

        return result;
      }
      // save the new token to local storage
      setTokenToLocalStorage(refreshResult.data.accessToken as string);

      // store the new token
      api.dispatch(
        setCredentials({
          token: refreshResult.data.accessToken as string,
          user,
        }),
      );
      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (_builder) => ({}),
});
