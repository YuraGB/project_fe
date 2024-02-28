import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import { type CSSProperties, type FC, type PropsWithChildren } from "react";
import Sider from "antd/lib/layout/Sider";
import Navigation from "@/modules/Navigation/Navigation.tsx";

const LayoutWithSidebar: FC<PropsWithChildren> = ({ children }) => {
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

  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#1677ff",
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
      <Header style={headerStyle}>
        <Navigation />
      </Header>
      <Layout>
        <Sider width="25%" style={siderStyle}>
          Sider
        </Sider>
        <Content style={contentStyle}>{children}</Content>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};

export default LayoutWithSidebar;
