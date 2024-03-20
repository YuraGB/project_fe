import { type PayloadAction } from "@reduxjs/toolkit";
import { type TPage } from "@/modules/CreateCustomPage/types.ts";
import { type TSlicePage } from "@/modules/store/slices/page/pageSlice.ts";

export default {
  addPage: (state: TSlicePage, action: PayloadAction<TPage[]>) => {
    state.pages = state.pages.concat(...action.payload);
  },
  removePage: (state: TSlicePage, action: PayloadAction<number>) => {
    state.pages = state.pages.filter((page) => page.id !== action.payload);
  },
};
