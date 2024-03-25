import { useRemovePageMutation } from "@/modules/servises/page/endpoints";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

type TUseRemovePage = {
  onRemoveHandlerPage: (id: number) => void;
  isLoading: boolean;
  error: unknown;
  data: number | undefined;
};

export const useRemovePage = (): TUseRemovePage => {
  const [onRemove, { data, isLoading, error }] = useRemovePageMutation();
  const toastRef = useRef<number | string>();
  const onRemoveHandlerPage = (id: number): void => {
    toastRef.current = toast.loading("Removing page...");
    void onRemove(id);
  };

  useEffect(() => {
    if (data && toastRef.current) {
      toast.update(toastRef.current, {
        render: "Page removed",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
    }
  }, [data]);

  useEffect(() => {
    if (error && toastRef.current) {
      toast.update(toastRef.current, {
        render: "Remove failed",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  }, [error]);

  return {
    onRemoveHandlerPage,
    isLoading,
    error,
    data,
  };
};
