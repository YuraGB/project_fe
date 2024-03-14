import { Form, type FormProps } from "antd";
import type { TCreateUser } from "@/modules/servises/auth/types.ts";

export const useUpdateProfile = () => {
  const [form] = Form.useForm();
  const onFinish: FormProps["onFinish"] = (
    values: Omit<TCreateUser, "dateOfBirth" | "phoneNumber"> & {
      "date-picker": { format: (kay: string) => string };
      prefix: string;
      phone: string;
    },
  ): void => {
    console.log(values);
  };

  return {
    form,
    onFinish,
  };
};
