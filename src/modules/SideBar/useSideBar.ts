import { type TPage } from "@/modules/CreateCustomPage/types.ts";

import { useFetchPages } from "@/modules/CreateCustomPage/api/useFetchPages.ts";

type TUseSideBar = {
  pages: TPage[] | null;
};

export const useSideBar = (): TUseSideBar => {
  const { pages } = useFetchPages();

  return {
    pages: pages ?? [],
  };
};
