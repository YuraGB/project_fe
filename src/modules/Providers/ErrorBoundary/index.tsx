import { ErrorBoundary } from "react-error-boundary";
import { type FC, type PropsWithChildren } from "react";
import ErrorFallback from "@/modules/Providers/ErrorBoundary/components/ErrorFallback.tsx";

const ErrorProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};

export default ErrorProvider;
