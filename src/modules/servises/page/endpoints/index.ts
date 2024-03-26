import { type TSavePage } from "@/modules/servises/page/types.ts";
import { pagesApi } from "@/modules/servises/page";
import { type TPage } from "@/modules/CreateCustomPage/types.ts";

export const pagesApiSlice = pagesApi.injectEndpoints({
  endpoints: (_build) => ({
    savePage: _build.mutation<TSavePage, TSavePage>({
      query: (data) => ({
        url: "/page/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Pages" }],
    }),
    updatePage: _build.mutation<TSavePage, TSavePage>({
      query: (data) => ({
        url: `/page/update`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [{ type: "Pages" }],
    }),
    getPagesByUserId: _build.query<TPage[], number>({
      query: (id) => ({
        url: `/pages?userId=${id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, _id) => [{ type: "Pages" }],
    }),
    removePage: _build.mutation<number, number>({
      query: (id) => ({
        url: `/page/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, _id) => [{ type: "Pages" }],
    }),
    getPage: _build.query<TPage, number>({
      query: (id) => ({
        url: `/page/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useSavePageMutation,
  useLazyGetPageQuery,
  useLazyGetPagesByUserIdQuery,
  useRemovePageMutation,
  useUpdatePageMutation,
} = pagesApiSlice;
