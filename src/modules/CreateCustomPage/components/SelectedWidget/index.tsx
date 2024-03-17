import { type TWidgetSelected } from "@/modules/CreateCustomPage/types.ts";
import { type FC } from "react";
import YoutubeWidgetCreate from "@/modules/CreateCustomPage/components/YoutubeWidgetCreate";
import { widgets } from "@/modules/CreateCustomPage/widgetNaming.ts";
import { MinusCircleOutlined } from "@ant-design/icons";
import { Flex, Space } from "antd";

const SelectedWidget: FC<TWidgetSelected> = ({
  widgetName,
  fieldName,
  remove,
  field,
}) => {
  let widget = null;
  if (!widgetName) return null;

  if (widgetName === widgets.youtube.value) {
    widget = <YoutubeWidgetCreate name={fieldName} />;
  }

  return (
    <Flex style={{ padding: "10px 0" }}>
      <Space>
        {widget}
        <MinusCircleOutlined
          className="dynamic-delete-button"
          onClick={() => { remove(field.name); }}
        />
      </Space>
    </Flex>
  );
};

export default SelectedWidget;
