import { useSelector } from "react-redux";
import { userSelector } from "@/modules/store/slices/auth/authSlice.ts";

import type { FormProps } from "antd";
import {
  type TPage,
  type TSaveWidgets,
  type TWidgets,
} from "@/modules/servises/page/types.ts";
import { useSavePageMutation } from "@/modules/servises/page/endpoints";

type TSubmit = TPage & Record<string, Array<TWidgets["widgetData"]>>;

type TUSeSubmit = {
  onSubmit: FormProps["onFinish"];
  isLoading: boolean;
  error: unknown;
  data: unknown;
};

export const useSubmit = (): TUSeSubmit => {
  const user = useSelector(userSelector);
  const [savePage, { data: savedPage, error, isLoading }] =
    useSavePageMutation();

  const onSubmit: FormProps["onFinish"] = (data: TSubmit): void => {
    const formatWidgets = Object.keys(data).filter(
      (key) => key !== "page_title",
    );

    const widgets: TSaveWidgets[] = formatWidgets.map((widgetType) => {
      const listOfWidgets = Object.values(data[widgetType]);

      return {
        type: widgetType,
        widgets: listOfWidgets,
      };
    });

    if (user?.id) {
      const dataToSend = {
        page_title: data.page_title,
        userId: user?.id,
        widgets,
      };

      void savePage(dataToSend);
    }
  };

  return {
    onSubmit,
    isLoading,
    error,
    data: savedPage,
  };
};
