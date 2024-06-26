import {
  combineReducers,
  configureStore,
  type EnhancedStore,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { apiSlice } from "@/modules/servises/auth";
import { authSliceReducer } from "@/modules/store/slices/auth/authSlice";
import { userApiSlice } from "@/modules/servises/user";
import { pagesApi } from "@/modules/servises/page";
import { pagesSliceReducer } from "@/modules/store/slices/page/pageSlice.ts";
import { widgetApiSlice } from "@/modules/servises/widget";

const rootReducer = combineReducers({
  auth: authSliceReducer,
  pages: pagesSliceReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  [userApiSlice.reducerPath]: userApiSlice.reducer,
  [pagesApi.reducerPath]: pagesApi.reducer,
  [widgetApiSlice.reducerPath]: widgetApiSlice.reducer,
});

export const setupStore = (): EnhancedStore =>
  configureStore({
    devTools: process.env.NODE_ENV !== "production",
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        apiSlice.middleware,
        pagesApi.middleware,
        widgetApiSlice.middleware,
        userApiSlice.middleware,
      ),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch: () => AppDispatch = useDispatch;
