import { useMemo } from "react";
import { type TPage } from "@/modules/CreateCustomPage/types.ts";

type TInitData = Record<string, object>;

export const useInitData = (page: TPage): TInitData => {
  const { id: pageId, title, widgets } = page;
  return useMemo(() => {
    const initialledWidgets = widgets.reduce(
      (acc: Record<string, object>, { id, type, ...rest }) => {
        if (type in acc) {
          acc[type] = {
            ...acc[type],
            [id]: { ...rest },
          };
          return acc;
        }
        acc[type] = { [id]: { ...rest } };
        return acc;
      },
      {},
    );

    return Object.assign(
      {},
      { [pageId]: { page_title: title } },
      initialledWidgets,
    );
  }, [page]);
};
