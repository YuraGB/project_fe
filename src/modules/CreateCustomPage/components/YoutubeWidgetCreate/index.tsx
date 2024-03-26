import { type FC } from "react";
import { type TWidget } from "@/modules/CreateCustomPage/types.ts";
import { Form, Input, Space } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const YoutubeWidgetCreate: FC<{ widget: TWidget }> = ({ widget }) => {
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
      <h2>Youtube widget</h2>
      <Form.Item noStyle name={[widget.type, widget.id, "youtube_title"]}>
        <Input placeholder="title" size={"large"} />
      </Form.Item>
      <Form.Item noStyle name={[widget.type, widget.id, "youtube_id"]}>
        <Input placeholder="Youtube id" size={"large"} />
      </Form.Item>
      <CloseOutlined
        onClick={() => {
          widget.remove?.(widget.id);
        }}
      />
    </Space>
  );
};

export default YoutubeWidgetCreate;
