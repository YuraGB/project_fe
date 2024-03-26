import { type TPage } from "@/modules/CreateCustomPage/types.ts";
import { useSelector } from "react-redux";
import { pageSelector } from "@/modules/store/slices/page/pageSlice.ts";
import { useSavePageMutation } from "@/modules/servises/page/endpoints";
import { userSelector } from "@/modules/store/slices/auth/authSlice.ts";

type TUseCreateCustomPage = {
  pages: TPage[];
  addPage: () => void;
};

export const useCreateCustomPage = (): TUseCreateCustomPage => {
  const pages = useSelector(pageSelector);
  const user = useSelector(userSelector);
  const [savePage, { data: _savedPage, error: _saveError }] =
    useSavePageMutation();

  const addNewPage = (): void => {
    if (user?.id) {
      // add new page with empty fields
      void savePage({ page_title: "Page", widgets: [], userId: user.id });
    }
  };

  return {
    pages: pages ?? [],
    addPage: addNewPage,
  };
};
