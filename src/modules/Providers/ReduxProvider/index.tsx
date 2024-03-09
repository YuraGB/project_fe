import { Provider } from "react-redux";
import { type FC, type PropsWithChildren } from "react";
import { setupListeners } from "@reduxjs/toolkit/query";
import { setupStore } from "@/modules/store";

const ReduxProvider: FC<PropsWithChildren> = ({ children }) => {
  const store = setupStore();
  // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
  // see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
  setupListeners(store.dispatch);

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
