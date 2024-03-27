import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const widgetApiSlice = createApi({
  reducerPath: "widgetApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_SERVER_URL_API as string,
  }),
  endpoints: (_builder) => ({}),
});
