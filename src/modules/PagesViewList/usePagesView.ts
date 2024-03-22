import { useFetchPages } from "@/modules/CreateCustomPage/api/useFetchPages.ts";
import { type TPage } from "@/modules/CreateCustomPage/types.ts";

type TUsePagesView = {
  pages: TPage[];
  isLoading: boolean;
};

export const usePagesView = (): TUsePagesView => {
  const { pages, isLoading } = useFetchPages();

  return { pages, isLoading };
};
