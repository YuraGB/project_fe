import { Form, type FormProps } from "antd";
import { useLoginMutation } from "@/modules/store/slices/auth/endpoints";
import { useEffect } from "react";
import { setTokenToLocalStorage } from "@/modules/servises/util/setHeadesAuth.ts";
import { setCredentials } from "@/modules/store/slices/auth/authSlice.ts";
import { useDispatch } from "react-redux";
import type { FormInstance } from "antd/lib";

type TUseLoginForm = {
  form: FormInstance;
  onFinish: FormProps["onFinish"];
  error: unknown;
  isLoading: boolean;
};
export const useLoginForm = (): TUseLoginForm => {
  const [form] = Form.useForm();
  const [submitLogin, { data, isLoading, error }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.accessToken) {
      // save token to local storage
      // reset form
      setTokenToLocalStorage(data.accessToken);
      dispatch(
        setCredentials({
          user: {
            email: data.email,
            name: data.name,
            phoneNumber: data.phoneNumber,
            dateOfBirth: data.dateOfBirth,
            id: data.id,
            agreement: data.agreement,
          },
          token: data.accessToken,
        }),
      );
      form.resetFields();
    }
  }, [data]);
  const onFinish = (values: { email: string; password: string }): void => {
    if (values.email && values.password) {
      void submitLogin(values);
    }
  };
  return { form, onFinish, error, isLoading };
};
