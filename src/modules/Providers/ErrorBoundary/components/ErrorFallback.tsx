import { type CSSProperties, type FC } from "react";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";

type TErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

const ErrorFallback: FC<TErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  const headerStyle: CSSProperties = {
    textAlign: "center",
    color: "#000",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
  };

  const contentStyle: CSSProperties = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    justifyItems: "center",
    alignItems: "center",
    color: "#000",
    zIndex: 0,
    backgroundColor: "transparent",
  };

  const footerStyle: CSSProperties = {
    textAlign: "center",
    color: "#000",
    backgroundColor: "#4096ff",
    zIndex: 5,
  };

  const layoutStyle: CSSProperties = {
    overflow: "hidden",
    width: "100%",
    maxWidth: "100%",
    height: "100%",
    zIndex: 1,
    backgroundColor: "transparent",
  };

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}> </Header>
      <Content style={contentStyle}>
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button type={"button"} onClick={resetErrorBoundary}>
          Try again
        </button>
      </Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};

export default ErrorFallback;
