import { Button, Form, Input } from "antd";
import {
  formItemLayout,
  tailFormItemLayout,
} from "@/modules/RegistrationForm/config.ts";
import { type ReactNode } from "react";
import { useLoginForm } from "@/modules/LoginForm/useLoginForm.ts";

const LoginForm = (): ReactNode => {
  const { form, onFinish, isLoading } = useLoginForm();

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: "380",
      }}
      style={{ maxWidth: 768, margin: "auto" }}
      scrollToFirstError
      variant={"filled"}
    >
      <h1>Login Form</h1>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password autoComplete={"on"} />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button
          type="primary"
          htmlType="submit"
          disabled={isLoading}
          loading={isLoading}
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
