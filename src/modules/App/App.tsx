import compose from "@/modules/App/compose.tsx";
import { type ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutersComponent from "@/modules/Routes";

function App(): ReactNode {
  const ProviderCompose = compose(BrowserRouter);

  return (
    <ProviderCompose>
      <RoutersComponent />
    </ProviderCompose>
  );
}

export default App;
