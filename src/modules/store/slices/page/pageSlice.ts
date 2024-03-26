import { createSlice } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { type TPage } from "@/modules/CreateCustomPage/types.ts";

export type TSlicePage = TPage[];

const initialState: TSlicePage = [];

const pageSlice = createSlice({
  name: "pages",
  initialState,
  reducers,
});

export const { removePage, addPage, setPages } = pageSlice.actions;
export const pagesSliceReducer = pageSlice.reducer;

export const pageSelector = ({ pages }: { pages: TPage[] }): TPage[] | null =>
  pages;
