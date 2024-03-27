import { Form, Input, Space } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { type TWidget } from "@/modules/CreateCustomPage/types.ts";
import { type FC } from "react";

type LinkWidgetCreateProps = {
  widget: TWidget;
};

const LinkWidgetCreate: FC<LinkWidgetCreateProps> = ({ widget }) => {
  return (
    <Space
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "2px",
        padding: "8px",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <h2>Link widget</h2>
      <Form.Item noStyle name={[widget.type, widget.id, "link_url"]}>
        <Input placeholder="url address for link" size={"large"} />
      </Form.Item>
      <Form.Item noStyle name={[widget.type, widget.id, "link_title"]}>
        <Input placeholder="title for link" size={"large"} />
      </Form.Item>
      <CloseOutlined
        onClick={() => {
          widget.remove?.(widget.id as string);
        }}
      />
    </Space>
  );
};

export default LinkWidgetCreate;
