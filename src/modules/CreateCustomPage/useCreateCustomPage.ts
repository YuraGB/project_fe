import { type TPage } from "@/modules/CreateCustomPage/types.ts";
import { useFetchPages } from "@/modules/CreateCustomPage/api/useFetchPages.ts";

const newPage = {
  id: "",
  title: "Page",
  widgets: [],
};

type TUseCreateCustomPage = {
  pages: TPage[];
  addPage: () => void;
  isLoading: boolean;
};

export const useCreateCustomPage = (): TUseCreateCustomPage => {
  const { setPages, pages, isLoading } = useFetchPages();

  const addPage = (): void => {
    // add new page with empty fields
    setPages((prev: TPage[]) => [...prev, { ...newPage, id: Math.random() }]);
  };

  return {
    pages,
    addPage,
    isLoading,
  };
};
