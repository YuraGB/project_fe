import { widgetApiSlice } from "@/modules/servises/widget";
import { type TRemoveWidget } from "@/modules/servises/widget/endpoints/types.ts";

export const widgetApi = widgetApiSlice.injectEndpoints({
  endpoints: (_build) => ({
    removeWidget: _build.mutation<TRemoveWidget, number>({
      query: (data) => ({
        url: "/widget/remove",
        method: "DELETE",
        body: data,
      }),
    }),
  }),
});

export const { useRemoveWidgetMutation } = widgetApi;
