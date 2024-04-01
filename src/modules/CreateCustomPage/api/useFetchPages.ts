import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "@/modules/store/slices/auth/authSlice.ts";
import { useLazyGetPagesByUserIdQuery } from "@/modules/servises/page/endpoints";
import type { TPage } from "@/modules/CreateCustomPage/types.ts";
import { type FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { type SerializedError } from "@reduxjs/toolkit";
import {
  pageSelector,
  setPages,
} from "@/modules/store/slices/page/pageSlice.ts";

type TUseFetchPages = {
  pages: TPage[] | [];
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
};

export const useFetchPages = (): TUseFetchPages => {
  const pages = useSelector(pageSelector);
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  // initial load
  const [fetchPages, { data, isLoading, error }] =
    useLazyGetPagesByUserIdQuery();

  useEffect(() => {
    if (!pages?.length && user?.id) {
      void fetchPages(user.id);
    }
  }, [user]);

  useEffect(() => {
    if (data) {
      dispatch(setPages(data));
    }
  }, [data]);

  return {
    pages: pages ?? [],
    isLoading,
    error,
  };
};
