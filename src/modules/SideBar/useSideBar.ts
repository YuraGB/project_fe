import { type TPage } from "@/modules/CreateCustomPage/types.ts";
import { useSelector } from "react-redux";
import { pageSelector } from "@/modules/store/slices/page/pageSlice.ts";

type TUseSideBar = {
  pages: TPage[] | null;
};

export const useSideBar = (): TUseSideBar => {
  const pages = useSelector(pageSelector);

  return {
    pages: pages ?? [],
  };
};
