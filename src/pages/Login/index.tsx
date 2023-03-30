import React, { useContext, useState } from "react";
import { Button, Form, Input, message, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import Auth from "../../app/models/Auth";
import { useMutation } from "react-query";
import { AppContext } from "../../app/context/AppContext";
import User from "../../app/models/User";
import { SuccessLogin } from "../../app/models/interface";
import styled from "styled-components";

interface Props {
  isOpenLogin: boolean;
  setOpenLogin: any;
}

const CustomModal = styled(Modal)`
  .ant-modal-content {
    background: #343a40;
  }
`;

const CustomInput = styled(Input)`
  background: #495057 !important;
  border: none !important;
  color: #e9ecef;

  &::placeholder {
    color: #999;
  }

  :where(.css-dev-only-do-not-override-sk7ap8).ant-input-disabled,
  :where(.css-dev-only-do-not-override-sk7ap8).ant-input[disabled] {
    color: #a4a5a7;
  }
`;

const CustomPassword = styled(Input.Password)`
  :where(.css-dev-only-do-not-override-sk7ap8).ant-input-affix-wrapper,
  .ant-input {
    background: #495057 !important;
    border: none !important;
    color: #e9ecef;
  }
  .ant-input-password-icon {
    color: #e9ecef !important;
  }
  input::placeholder {
    color: #999 !important;
  }
`;

function Login({ isOpenLogin, setOpenLogin }: Props) {
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [isForgetPassword, setForgetPassword] = useState(false);

  const handleSuccess = async (value: SuccessLogin) => {
    const res = await User.getUserDetail(value.id);
    setUser({ ...res, id: value.id });
    localStorage.setItem("user", JSON.stringify({ ...res, id: value.id }));
    navigate("/");
  };

  const loginMutation = useMutation(Auth.getTokenByUsernamePassword, {
    onSuccess: handleSuccess,
    onError: (e: any) => {
      message.error(e);
    },
  });

  const resendPassword = useMutation(Auth.resendPassword, {
    onSuccess: () => {
      message.success("Check your email for new password");
      setForgetPassword(false);
    },
    onError: (e: any) => {
      message.error(e);
    },
  });

  return (
    <CustomModal
      width={400}
      destroyOnClose
      closable={false}
      onCancel={() => setOpenLogin(false)}
      open={isOpenLogin}
      footer={null}
    >
      <div className="flex flex-col justify-center items-center py-6">
        <div className="text-light font-medium mb-4 self-center text-3xl uppercase">
          {!isForgetPassword ? "Login" : "Forget password"}
        </div>

        <div className="mt-4 w-full">
          {!isForgetPassword ? (
            <Form form={form} onFinish={loginMutation.mutate} layout="vertical">
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Email is required" },
                  {
                    type: "email",
                    message: "Invalid email format",
                  },
                ]}
              >
                <CustomInput
                  className="h-12"
                  size="large"
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Password is required",
                  },
                ]}
                required
                name="password"
              >
                <CustomPassword
                  className="h-12"
                  size="large"
                  placeholder="Password"
                />
              </Form.Item>

              <div className="flex justify-center items-center select-none -translate-y-2 mb-2">
                <a
                  onClick={() => {
                    setForgetPassword(true);
                  }}
                  className="text-blue-500 text-sm font-bold"
                >
                  Forget password?
                </a>
              </div>

              <div className="flex w-full">
                <Button
                  htmlType="submit"
                  type="primary"
                  size="large"
                  className="w-full flex items-center justify-center h-12 hover:-translate-y-0.5"
                >
                  <span className="mr-2 uppercase">Login</span>
                </Button>
              </div>
            </Form>
          ) : (
            <Form
              form={form}
              onFinish={resendPassword.mutate}
              layout="vertical"
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Email is required" },
                  {
                    type: "email",
                    message: "Invalid email format",
                  },
                ]}
              >
                <CustomInput
                  className="h-12"
                  size="large"
                  placeholder="Email"
                />
              </Form.Item>
              <div className="flex w-full">
                <Button
                  htmlType="submit"
                  type="primary"
                  size="large"
                  className="w-full flex items-center justify-center h-12 hover:-translate-y-0.5"
                >
                  <span className="mr-2 uppercase">Resend password</span>
                </Button>
              </div>
            </Form>
          )}
        </div>
      </div>
    </CustomModal>
  );
}

export default Login;
