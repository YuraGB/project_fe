import {
  combineReducers,
  configureStore,
  type EnhancedStore,
} from "@reduxjs/toolkit";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { apiSlice } from "../servises/auth";
import { authSliceReducer } from "@/modules/store/slices/auth/authSlice";
import { useDispatch } from "react-redux";
import { userApiSlice } from "@/modules/servises/user";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authSliceReducer,
  [userApiSlice.reducerPath]: userApiSlice.reducer,
});

export const setupStore = (): EnhancedStore =>
  configureStore({
    devTools: process.env.NODE_ENV !== "production",
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(apiSlice.middleware)
        .concat(userApiSlice.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch: () => AppDispatch = useDispatch;
