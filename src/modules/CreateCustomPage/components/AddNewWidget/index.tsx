import SelectWidget from "@/modules/CreateCustomPage/components/SelectWidget";
import { Button, Form } from "antd";
import { Fragment, type ReactNode } from "react";

const AddNewWidget = (): ReactNode => {
  return (
    <Form.List name="widgets">
      {(fields, newWidget) => (
        <Fragment>
          {fields.map((field) => (
            <Form.Item name={field.name} key={field.key}>
              <SelectWidget
                name={[field.name + "widget_name"]}
                remove={newWidget.remove}
                field={field}
              />
            </Form.Item>
          ))}
          <Button type="dashed" onClick={() => { newWidget.add(); }} block>
            + Add widget
          </Button>
        </Fragment>
      )}
    </Form.List>
  );
};

export default AddNewWidget;
