import { Form } from "antd";

import AddNewPage from "@/modules/CreateCustomPage/components/AddNewPage";
import { type ReactNode } from "react";

const CreateCustomPage = (): ReactNode => {
  const [form] = Form.useForm();

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      form={form}
      name="dynamic_form_complex"
      style={{ maxWidth: 600, width: "100%" }}
      autoComplete="off"
      initialValues={{ items: [{}] }}
    >
      <Form.List name="items">
        {(fields, { add, remove }) => (
          <AddNewPage fields={fields} add={add} remove={remove} />
        )}
      </Form.List>
    </Form>
  );
};

export default CreateCustomPage;
