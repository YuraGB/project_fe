import { Form, Input, Space } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { type TWidget } from "@/modules/CreateCustomPage/types.ts";
import { type FC } from "react";

type ImageWidgetCreateProps = {
  widget: TWidget;
};

const ImageWidgetCreate: FC<ImageWidgetCreateProps> = ({ widget }) => {
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
      <h2>Image widget</h2>
      <Form.Item noStyle name={[widget.type, widget.id, "image_link"]}>
        <Input placeholder="link for an image" size={"large"} />
      </Form.Item>
      <Form.Item noStyle name={[widget.type, widget.id, "image_title"]}>
        <Input placeholder="title for image" size={"large"} />
      </Form.Item>
      <Form.Item noStyle name={[widget.type, widget.id, "image_src"]}>
        <Input placeholder="source of the image" size={"large"} />
      </Form.Item>
      <CloseOutlined
        onClick={() => {
          widget.remove?.(widget.id as string);
        }}
      />
    </Space>
  );
};

export default ImageWidgetCreate;
