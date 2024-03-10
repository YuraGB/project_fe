import compose from "@/modules/App/compose.tsx";
import { type ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutersComponent from "@/modules/Routes";
import ReduxProvider from "@/modules/Providers/ReduxProvider";

function App(): ReactNode {
  const ProviderCompose = compose(BrowserRouter, ReduxProvider);

  return (
    <ProviderCompose>
      <RoutersComponent />
    </ProviderCompose>
  );
}

export default App;
