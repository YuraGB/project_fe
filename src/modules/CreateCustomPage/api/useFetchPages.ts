import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "@/modules/store/slices/auth/authSlice.ts";
import { useLazyGetPagesByUserIdQuery } from "@/modules/servises/page/endpoints";
import type { TPage, TWidget } from "@/modules/CreateCustomPage/types.ts";

type TUseFetchPages = {
  pages: TPage[];
  setPages: (
    pages: (
      prev: TPage[],
    ) => Array<TPage | { id: number; title: string; widgets: TWidget[] }>,
  ) => void;
  isLoading: boolean;
};

export const useFetchPages = (): TUseFetchPages => {
  const [pages, setPages] = useState<TPage[]>([]);
  const user = useSelector(userSelector);

  // initial load
  const [fetchPages, { data, isLoading }] = useLazyGetPagesByUserIdQuery();

  useEffect(() => {
    if (!pages.length && user?.id) {
      void fetchPages(user.id);
    }
  }, []);

  useEffect(() => {
    if (data) {
      setPages(data);
    }
  }, [data]);

  return {
    pages,
    setPages,
    isLoading,
  };
};
