import { createSlice } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { type StoreUser } from "@/modules/store/slices/auth/endpoints/types.ts";

export type TSliceState = {
  user: null | StoreUser;
  token: null | string;
};

const initialState: TSliceState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers,
});

export const { setCredentials, logout } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;

export const userSelector = (state: { auth: TSliceState }): StoreUser | null =>
  state.auth.user;
export const tokenSelector = (state: { auth: TSliceState }): string | null =>
  state.auth.token;
