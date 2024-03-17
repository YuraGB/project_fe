import { type FC } from "react";
import { type TYoutubeWidgetCreate } from "@/modules/CreateCustomPage/types.ts";
import { Form, Input, Space } from "antd";

const YoutubeWidgetCreate: FC<TYoutubeWidgetCreate> = ({ name }) => {
  return (
    <Space>
      <Form.Item noStyle name={[name, "youtube_title"]}>
        <Input placeholder="title" />
      </Form.Item>
      <Form.Item noStyle name={[name, "youtube_id"]}>
        <Input placeholder="Youtube id" />
      </Form.Item>
    </Space>
  );
};

export default YoutubeWidgetCreate;
