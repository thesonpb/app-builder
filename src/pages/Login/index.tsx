import React, { useContext } from "react";
import { Button, Form, Input, message, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import Auth from "../../app/models/Auth";
import { useMutation } from "react-query";
import { AppContext } from "../../app/context/AppContext";
import User from "../../app/models/User";
import { SuccessLogin } from "../../app/models/interface";

interface Props {
  isOpenLogin: boolean;
  setOpenLogin: any;
}

function Login({ isOpenLogin, setOpenLogin }: Props) {
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();
  const [form] = Form.useForm();

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

  return (
    <Modal
      width={400}
      destroyOnClose
      closable={false}
      onCancel={() => setOpenLogin(false)}
      open={isOpenLogin}
      footer={null}
    >
      <div className="flex flex-col justify-center items-center py-6">
        <div className="font-medium mb-4 self-center text-3xl uppercase text-gray-800">
          Login
        </div>

        <div className="mt-4 w-full">
          <Form form={form} onFinish={loginMutation.mutate} layout="vertical">
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Username is required",
                },
              ]}
              required
              name="username"
            >
              <Input className="h-12" size="large" placeholder="Username" />
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
              <Input.Password
                className="h-12"
                size="large"
                placeholder="Password"
              />
            </Form.Item>

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
        </div>
      </div>
    </Modal>
  );
}

export default Login;
