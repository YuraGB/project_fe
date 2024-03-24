import { Form, type FormProps } from "antd";
import * as endpoints from "@/modules/servises/auth/endpoints";
import { useEffect, useRef } from "react";
import { setTokenToLocalStorage } from "@/modules/servises/util/setHeadesAuth.ts";
import { setCredentials } from "@/modules/store/slices/auth/authSlice.ts";
import { useDispatch } from "react-redux";
import type { FormInstance } from "antd/lib";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type TUseLoginForm = {
  form: FormInstance;
  onFinish: FormProps["onFinish"];
  error: unknown;
  isLoading: boolean;
};
export const useLoginForm = (): TUseLoginForm => {
  const navigate = useNavigate();
  const { useLoginMutation } = endpoints;
  const toastRef = useRef<number | string>();
  const [form] = Form.useForm();
  const [submitLogin, { data, isLoading, error }] = useLoginMutation();
  const dispatch = useDispatch();

  const onFinish = (values: { email: string; password: string }): void => {
    if (values.email && values.password) {
      toastRef.current = toast.loading("Login in...");
      void submitLogin(values);
    }
  };

  useEffect(() => {
    if (data?.accessToken) {
      // save token to local storage
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
      // reset form
      form.resetFields();

      if (toastRef.current) {
        toast.update(toastRef.current, {
          render: "Login success",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
      }
      navigate("/user");
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      if (toastRef.current) {
        toast.update(toastRef.current, {
          render: "Login failed",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      }
    }
  }, [error]);

  return { form, onFinish, error, isLoading };
};
