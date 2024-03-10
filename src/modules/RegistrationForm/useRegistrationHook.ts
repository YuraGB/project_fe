import { Form } from "antd";
import { useRegisterMutation } from "@/modules/store/slices/auth/endpoints";
import type { FormProps } from "rc-field-form/lib/Form";
import type { TCreateUser } from "@/modules/servises/auth/types.ts";
import { useEffect } from "react";
import { setTokenToLocalStorage } from "@/modules/servises/util/setHeadesAuth.ts";
import { setCredentials } from "@/modules/store/slices/auth/authSlice.ts";
import { useAppDispatch } from "@/modules/store";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useRegistrationHook = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const [registation, { isLoading, error, data }] = useRegisterMutation();

  useEffect(() => {
    if (data?.accessToken) {
      const token = data.accessToken;

      const user = {
        email: data.email,
        name: data.name,
        phoneNumber: data.phoneNumber,
        dateOfBirth: data.dateOfBirth,
        id: data.id,
        agreement: data.agreement,
      };

      // save user data to store
      dispatch(setCredentials({ user, token }));
      // save token to local storage
      setTokenToLocalStorage(token);
      // reset form
      form.resetFields();
    }
  }, [data]);

  const onFinish: FormProps["onFinish"] = (
    values: Omit<TCreateUser, "dateOfBirth" | "phoneNumber"> & {
      "date-picker": { format: (kay: string) => string };
      prefix: string;
      phone: string;
    },
  ): void => {
    const formatSubmitData: TCreateUser = {
      email: values.email,
      password: values.password,
      name: values.name,
      phoneNumber: values.prefix + values.phone,
      dateOfBirth: values["date-picker"].format("YYYY-MM-DD"),
      agreement: values.agreement,
    };

    void registation(formatSubmitData);
  };

  return {
    form,
    onFinish,
    isLoading,
    error,
    data,
  };
};
