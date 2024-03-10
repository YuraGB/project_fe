import { type TSliceState } from "@/modules/store/slices/auth/authSlice.ts";
import { type PayloadAction } from "@reduxjs/toolkit";
import { type TCreatedUser } from "@/modules/store/slices/auth/endpoints/types.ts";

export default {
  setCredentials: (state: TSliceState, action: PayloadAction<TCreatedUser>) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
  },
  logout: (state: TSliceState) => {
    state.user = null;
    state.token = null;
  },
};
