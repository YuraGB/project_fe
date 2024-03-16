import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.VITE_BASE_SERVER_URL!,
  }),
  endpoints: (_builder) => ({}),
});
