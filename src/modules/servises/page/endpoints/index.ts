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
      invalidatesTags: ["Pages"],
    }),
    updatePage: _build.mutation<TSavePage, TSavePage>({
      query: (data) => ({
        url: `/page/update`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: () => ["Pages"],
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
