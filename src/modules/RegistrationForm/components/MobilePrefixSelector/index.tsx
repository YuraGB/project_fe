import { Form, Select } from "antd";
import { type ReactNode } from "react";
const { Option } = Select;

const MobilePrefixSelector = (): ReactNode => {
  return (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 80 }}>
        <Option value="+380">+380</Option>
      </Select>
    </Form.Item>
  );
};

export default MobilePrefixSelector;
