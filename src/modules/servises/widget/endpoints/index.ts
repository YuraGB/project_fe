import { widgetApiSlice } from "@/modules/servises/widget";
import {
  type TRemoveResponse,
  type TRemoveWidget,
} from "@/modules/servises/widget/endpoints/types.ts";

export const widgetApi = widgetApiSlice.injectEndpoints({
  endpoints: (_build) => ({
    removeWidget: _build.mutation<TRemoveResponse, TRemoveWidget>({
      query: (data) => ({
        url: "/widget/remove",
        method: "DELETE",
        body: data,
      }),
    }),
  }),
});

export const { useRemoveWidgetMutation } = widgetApi;
