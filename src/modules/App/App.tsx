import compose from "@/modules/App/compose.tsx";
import { type ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutersComponent from "@/modules/Routes";
import ReduxProvider from "@/modules/Providers/ReduxProvider";
import ErrorProvider from "@/modules/Providers/ErrorBoundary";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(): ReactNode {
  const ProviderCompose = compose(ErrorProvider, BrowserRouter, ReduxProvider);

  return (
    <ProviderCompose>
      <RoutersComponent />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ProviderCompose>
  );
}

export default App;
