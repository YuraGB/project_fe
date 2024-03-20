import { useRemovePageMutation } from "@/modules/servises/page/endpoints";

type TUseRemovePage = {
  onRemoveHandlerPage: (id: number) => void;
  isLoading: boolean;
  error: unknown;
  data: number | undefined;
};

export const useRemovePage = (): TUseRemovePage => {
  const [onRemove, { data, isLoading, error }] = useRemovePageMutation();

  const onRemoveHandlerPage = (id: number): void => {
    void onRemove(id);
  };

  return {
    onRemoveHandlerPage,
    isLoading,
    error,
    data,
  };
};
