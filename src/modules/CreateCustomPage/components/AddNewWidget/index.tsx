import SelectWidget from "@/modules/CreateCustomPage/components/SelectWidget";
import { Button, Form } from "antd";
import { type FC, type ReactNode, useRef } from "react";

const AddNewWidget: FC<{ addWidget: (w: string) => void }> = ({
  addWidget,
}): ReactNode => {
  const selectedWidget = useRef<string>("");
  return (
    <section>
      <SelectWidget selectedWidget={selectedWidget} />
      <Form.Item
        style={{
          margin: "24px",
        }}
      >
        <Button
          type="primary"
          htmlType="button"
          onClick={() => { addWidget(selectedWidget.current); }}
        >
          Add widget
        </Button>
      </Form.Item>
    </section>
  );
};

export default AddNewWidget;
