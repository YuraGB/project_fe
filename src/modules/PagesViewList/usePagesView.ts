import { type TPage } from "@/modules/CreateCustomPage/types.ts";
import { useSelector } from "react-redux";
import { pageSelector } from "@/modules/store/slices/page/pageSlice.ts";

type TUsePagesView = {
  pages: TPage[];
};

export const usePagesView = (): TUsePagesView => {
  const pages = useSelector(pageSelector);

  return { pages: pages ?? [] };
};
