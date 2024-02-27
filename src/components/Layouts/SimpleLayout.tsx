import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import { type CSSProperties, type FC, type PropsWithChildren } from "react";

const SimpleLayout: FC<PropsWithChildren> = ({ children }) => {
  const headerStyle: CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#4096ff",
  };

  const contentStyle: CSSProperties = {
    textAlign: "center",
    lineHeight: "120px",
    flexGrow: 1,
    color: "#fff",
    backgroundColor: "#0958d9",
  };

  const footerStyle: CSSProperties = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#4096ff",
  };

  const layoutStyle: CSSProperties = {
    borderRadius: 8,
    overflow: "hidden",
    width: "100%",
    maxWidth: "100%",
    height: "100%",
  };

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>Header</Header>
      <Content style={contentStyle}>{children}</Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};

export default SimpleLayout;
