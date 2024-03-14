import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import { type CSSProperties, type FC } from "react";
import Sider from "antd/lib/layout/Sider";
import Navigation from "@/modules/Navigation/Navigation.tsx";
import { Outlet } from "react-router-dom";

const LayoutWithSidebar: FC = () => {
  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#1677ff",
  };

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
        <Navigation />
      </Header>
      <Layout>
        <Sider width="25%" style={siderStyle}>
          Sider
        </Sider>
        <Content style={contentStyle}>
          {" "}
          <Outlet />
        </Content>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};

export default LayoutWithSidebar;
