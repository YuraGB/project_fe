import { type PayloadAction } from "@reduxjs/toolkit";
import { type TPage } from "@/modules/CreateCustomPage/types.ts";
import { type TSlicePage } from "@/modules/store/slices/page/pageSlice.ts";

export default {
  addPage: (state: TSlicePage, action: PayloadAction<TPage[]>) => {
    state = state.concat(...action.payload);
    return state;
  },
  removePage: (state: TSlicePage, action: PayloadAction<number>) => {
    state = state.filter((page) => page.id !== action.payload);
    return state;
  },
  setPages: (state: TSlicePage, action: PayloadAction<TPage[]>) => {
    state = action.payload;
    return state;
  },
};
