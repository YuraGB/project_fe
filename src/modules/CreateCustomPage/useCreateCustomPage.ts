import { type TPage } from "@/modules/CreateCustomPage/types.ts";
import { useDispatch, useSelector } from "react-redux";
import {
  addPage,
  pageSelector,
} from "@/modules/store/slices/page/pageSlice.ts";

const newPage = {
  id: "",
  title: "Page",
  widgets: [],
};

type TUseCreateCustomPage = {
  pages: TPage[];
  addPage: () => void;
};

export const useCreateCustomPage = (): TUseCreateCustomPage => {
  const pages = useSelector(pageSelector);
  const dispatch = useDispatch();

  const addNewPage = (): void => {
    // add new page with empty fields
    dispatch(addPage([{ ...newPage, id: Math.random() }]));
  };

  return {
    pages: pages ?? [],
    addPage: addNewPage,
  };
};
