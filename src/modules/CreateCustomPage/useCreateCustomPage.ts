import { useEffect, useState } from "react";
import { type TPage } from "@/modules/CreateCustomPage/types.ts";
import { randomString } from "@/util";
import { useGetPageQuery } from "@/modules/servises/page/endpoints";

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
  const [pages, setPages] = useState<TPage[]>([newPage]);
  // initial load
  const { data } = useGetPageQuery(12, {
    skip: true,
  });

  const addPage = (): void => {
    setPages((prev) => [...prev, { ...newPage, id: randomString() }]);
  };

  useEffect(() => {
    if (data) {
      setPages((prev) => [...prev, data]);
    }
  }, [data]);

  return {
    pages,
    addPage,
  };
};
