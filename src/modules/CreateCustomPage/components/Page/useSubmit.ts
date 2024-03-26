import { useSelector } from "react-redux";
import { userSelector } from "@/modules/store/slices/auth/authSlice.ts";

import type { FormProps } from "antd";
import {
  type TPage,
  type TSaveWidgets,
  type TWidgets,
} from "@/modules/servises/page/types.ts";
import { useUpdatePageMutation } from "@/modules/servises/page/endpoints";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

type TSubmit = TPage & Record<string, Array<TWidgets["widgetData"]>>;

type TUSeSubmit = {
  onSubmit: FormProps["onFinish"];
  data: unknown;
};

export const useSubmit = (pageId: number): TUSeSubmit => {
  const user = useSelector(userSelector);

  const [updatePage, { data: pageUpdated, error: updatePageError }] =
    useUpdatePageMutation();

  const toastRef = useRef<number | string>();

  const onSubmit: FormProps["onFinish"] = (data: TSubmit): void => {
    toastRef.current = toast.loading("Saving page...");

    // filter out page_title
    const formatWidgets = Object.keys(data).filter(
      (key) => key !== "page_title",
    );

    // filter out empty widgets
    // format widgets to match the backend
    const widgets: TSaveWidgets[] = formatWidgets
      .filter((e) => e)
      .map((widgetType) => {
        const listOfWidgets = [];
        for (const [key, value] of Object.entries(data[widgetType])) {
          // if key is not a number, it means it is a widget that wasn't saved yet
          if (value) {
            if (isNaN(Number(key))) {
              listOfWidgets.push(value);
            } else {
              listOfWidgets.push({ id: Number(key), ...value });
            }
          }
        }

        return {
          type: widgetType,
          widgets: listOfWidgets,
        };
      });

    if (user?.id) {
      const dataToSend = {
        id: pageId,
        page_title: data.page_title,
        userId: user?.id,
        widgets,
      };

      void updatePage(dataToSend);
    }
  };

  useEffect(() => {
    if (pageUpdated && toastRef.current) {
      toast.update(toastRef.current, {
        render: "Page Saved",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
    }
  }, [pageUpdated]);

  useEffect(() => {
    if (updatePageError && toastRef.current) {
      toast.update(toastRef.current, {
        render: "Save page failed",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  }, [updatePageError]);

  return {
    onSubmit,
    data: updatePage,
  };
};
