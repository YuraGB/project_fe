import { Button, DatePicker, Form, Input } from "antd";
import {
  datePickerConfig,
  formItemLayout,
  tailFormItemLayout,
} from "@/modules/RegistrationForm/config.ts";
import MobilePrefixSelector from "@/modules/RegistrationForm/components/MobilePrefixSelector";
import { useUpdateProfile } from "@/modules/UpdateProfile/useUpdateProfile.tsx";
import { useSelector } from "react-redux";
import { userSelector } from "@/modules/store/slices/auth/authSlice.ts";
import dayjs from "dayjs";
import { type ReactNode } from "react";

const UpdateProfileForm = (): ReactNode => {
  const { form, onFinish } = useUpdateProfile();
  const user = useSelector(userSelector);

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: "380",
        phone: user?.phoneNumber.replace("380", ""),
        "date-picker": dayjs(user?.dateOfBirth, "YYYY-MM-DD"),
        ...user,
      }}
      style={{ maxWidth: 768, margin: "auto", textAlign: "left" }}
      scrollToFirstError
      variant={"filled"}
    >
      <Form.Item name="date-picker" label="Day of birth" {...datePickerConfig}>
        <DatePicker />
      </Form.Item>

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
        name="name"
        label="Nickname"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your nickname!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input
          addonBefore={<MobilePrefixSelector />}
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button
          type="primary"
          htmlType="submit"
          disabled={false}
          loading={false}
        >
          Update profile info
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateProfileForm;
