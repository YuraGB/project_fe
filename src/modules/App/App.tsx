import compose from "@/modules/App/compose.tsx";
import LocationProvider from "@/modules/Providers/MotionFrameProvider";
import Router from "@/modules/Providers/RouterProvider";
import { type ReactNode } from "react";

function App(): ReactNode {
  const ProviderCompose = compose(LocationProvider);

  return (
    <ProviderCompose>
      <Router />
    </ProviderCompose>
  );
}

export default App;
