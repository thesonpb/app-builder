import React from "react";
import { Button, Form, Input, message, Modal } from "antd";
import { useMutation } from "react-query";
import Auth from "../../app/models/Auth";

interface Props {
  isOpenSignup: boolean;
  setOpenSignup: any;
  setOpenLogin: any;
}
function Signup({ setOpenLogin, isOpenSignup, setOpenSignup }: Props) {
  const [form] = Form.useForm();

  const handleSuccess = () => {
    setOpenSignup(false);
    setOpenLogin(true);
  };

  const signupMutation = useMutation(Auth.signup, {
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
      onCancel={() => setOpenSignup(false)}
      open={isOpenSignup}
      footer={null}
    >
      <div className="flex flex-col justify-center items-center py-6">
        <div className="font-medium mb-4 self-center text-3xl uppercase text-gray-800">
          Signup
        </div>

        <div className="mt-4 w-full">
          <Form form={form} onFinish={signupMutation.mutate} layout="vertical">
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Username is required",
                },
              ]}
              required
              name="userName"
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
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Firstname is required",
                },
              ]}
              required
              name="firstName"
            >
              <Input className="h-12" size="large" placeholder="Firstname" />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Lastname is required",
                },
              ]}
              required
              name="lastName"
            >
              <Input className="h-12" size="large" placeholder="Lastname" />
            </Form.Item>
            <div className="flex w-full">
              <Button
                htmlType="submit"
                type="primary"
                size="large"
                className="w-full flex items-center justify-center h-12 hover:-translate-y-0.5"
              >
                <span className="mr-2 uppercase">Signup</span>
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  );
}

export default Signup;
