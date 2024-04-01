import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TPage } from "@/modules/CreateCustomPage/types.ts";

export const pagesApi = createApi({
  reducerPath: "pagesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_SERVER_URL_API as string,
  }),
  tagTypes: ["Pages"],
  endpoints: (_builder) => ({
    getPagesByUserId: _builder.query<TPage[], number>({
      query: (id) => ({
        url: `/pages?userId=${id}`,
        method: "GET",
      }),
      providesTags: ["Pages"],
    }),
    removePage: _builder.mutation<number, number>({
      query: (id) => ({
        url: `/page/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, _error, id) => {
        console.log(result, id, _error);
        return ["Pages"];
      },
    }),
  }),
});
