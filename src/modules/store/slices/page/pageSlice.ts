import { createSlice } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { type TPage } from "@/modules/CreateCustomPage/types.ts";

export type TSlicePage = { pages: TPage[] };

const initialState: TSlicePage = {
  pages: [
    {
      id: 0,
      title: "Page",
      widgets: [],
    },
  ],
};

const pageSlice = createSlice({
  name: "pages",
  initialState,
  reducers,
});

export const { removePage, addPage } = pageSlice.actions;
export const pagesSliceReducer = pageSlice.reducer;

export const pageSelector = (state: { pages: TPage[] }): TPage[] | null =>
  state.pages;
