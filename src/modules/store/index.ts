import {
  combineReducers,
  configureStore,
  type EnhancedStore,
} from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { pokemonApi } from "../servises/pokemon";

const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export const setupStore = (): EnhancedStore =>
  configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pokemonApi.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
