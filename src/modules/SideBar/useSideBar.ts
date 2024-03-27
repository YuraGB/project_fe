import { type TPage } from "@/modules/CreateCustomPage/types.ts";

import { useFetchPages } from "@/modules/CreateCustomPage/api/useFetchPages.ts";
import { type FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { type SerializedError } from "@reduxjs/toolkit";

type TUseSideBar = {
  pages: TPage[] | null;
  error: FetchBaseQueryError | SerializedError | undefined;
};

export const useSideBar = (): TUseSideBar => {
  const { pages, error } = useFetchPages();

  return {
    pages: pages ?? [],
    error,
  };
};
