import { useSelector } from "react-redux";
import { userSelector } from "@/modules/store/slices/auth/authSlice.ts";

import type { FormProps } from "antd";
import {
  type TPage,
  type TSaveWidgets,
  type TWidgets,
} from "@/modules/servises/page/types.ts";
import { useSavePageMutation } from "@/modules/servises/page/endpoints";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

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

  const toastRef = useRef<number | string>();

  const onSubmit: FormProps["onFinish"] = (data: TSubmit): void => {
    toastRef.current = toast.loading("Saving page...");
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

  useEffect(() => {
    if (savedPage && toastRef.current) {
      toast.update(toastRef.current, {
        render: "Page Saved",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
    }
  }, [savedPage]);

  useEffect(() => {
    if (error && toastRef.current) {
      toast.update(toastRef.current, {
        render: "Save page failed",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  }, [error]);

  return {
    onSubmit,
    isLoading,
    error,
    data: savedPage,
  };
};
