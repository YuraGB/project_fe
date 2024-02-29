import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import { type CSSProperties, type FC, type PropsWithChildren } from "react";
import Navigation from "@/modules/Navigation/Navigation.tsx";
import { Outlet } from "react-router-dom";

const SimpleLayout: FC<PropsWithChildren> = ({}) => {
  const headerStyle: CSSProperties = {
    textAlign: "center",
    color: "#000",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
  };

  const contentStyle: CSSProperties = {
    textAlign: "center",
    position: "relative",
    display: "flex",
    lineHeight: "120px",
    flexGrow: 1,
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
      <Header style={headerStyle}>
        {" "}
        <Navigation />
      </Header>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};

export default SimpleLayout;
