import React, { useContext } from "react";
import { Button, Form, Input, message } from "antd";
import UsernameIcon from "../../app/icons/UsernameIcon";
import PasswordIcon from "../../app/icons/PasswordIcon";
import LoginIcon from "../../app/icons/LoginIcon";
import SignupIcon from "../../app/icons/SignupIcon";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../../app/models/Auth";
import { useMutation } from "react-query";
import { AppContext } from "../../app/context/AppContext";
import User from "../../app/models/User";
import { SuccessLogin } from "../../app/models/interface";

function Login() {
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
      <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
          Login
        </div>

        <div className="mt-10">
          <Form form={form} onFinish={loginMutation.mutate} layout="vertical">
            <div className="flex flex-col mb-6">
              <Form.Item required name="username" label={<div>Username</div>}>
                <Input
                  size="large"
                  placeholder="Username"
                  prefix={<UsernameIcon />}
                />
              </Form.Item>
            </div>
            <div className="flex flex-col mb-6">
              <div className="flex flex-col mb-6">
                <Form.Item required name="password" label={<div>Password</div>}>
                  <Input.Password
                    size="large"
                    placeholder="Password"
                    prefix={<PasswordIcon />}
                  />
                </Form.Item>
              </div>
            </div>

            <div className="flex w-full">
              <Button
                htmlType="submit"
                type="primary"
                size="large"
                className="w-full flex items-center justify-center"
              >
                <span className="mr-2 uppercase">Login</span>
                <LoginIcon />
              </Button>
            </div>
          </Form>
        </div>
        <div className="flex justify-center items-center mt-6">
          <Link
            to="/signup"
            className="flex items-center font-bold text-blue-500 hover:text-blue-700 text-sm text-center"
          >
            <SignupIcon />
            <div className="ml-2">Sign up</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
