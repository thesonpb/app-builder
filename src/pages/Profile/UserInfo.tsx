import React, { useEffect, useState } from "react";
import { Button, Form, Input, message } from "antd";
import styled from "styled-components";
import { useMutation } from "react-query";
import User from "../../app/models/User";

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
  background: #495057 !important;
  border: none;
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
function UserInfo({ form, userData, refetch }: any) {
  const [isEdit, setEdit] = useState(false);

  useEffect(() => {
    form.setFieldsValue({ ...userData });
  }, [isEdit]);

  const updateUser = useMutation(User.updateUserInfo, {
    onSuccess: () => {
      refetch();
      setEdit(false);
      form.setFieldsValue({ oldPassword: "", newPassword: "" });
      message.success("User updated successfully!");
    },
    onError: (e: any) => {
      if (e.response.data.message === "Invalid current password") {
        message.error("Invalid current password!");
      } else {
        message.error("Error!");
      }
    },
  });
  const handleFinish = (value: any) => {
    updateUser.mutate(value);
  };
  return (
    <div className="px-4">
      <h2 className="mt-0 mb-4 text-light">Personal information</h2>
      <Form layout="vertical" form={form} onFinish={handleFinish}>
        <Form.Item
          name="firstName"
          label={
            <label className="block text-light font-bold text-base">
              First name
            </label>
          }
          required={false}
          rules={[{ required: true, message: "First name is required!" }]}
        >
          <CustomInput
            disabled={!isEdit}
            size="large"
            placeholder="First name"
          />
        </Form.Item>
        <Form.Item
          name="lastName"
          label={
            <label className="block text-light font-bold text-base">
              Last name
            </label>
          }
          required={false}
          rules={[{ required: true, message: "Last name is required!" }]}
        >
          <CustomInput
            disabled={!isEdit}
            size="large"
            placeholder="Last name"
          />
        </Form.Item>
        <Form.Item
          name="userName"
          label={
            <label className="block text-light font-bold text-base">
              Username
            </label>
          }
          required={false}
          rules={[{ required: true, message: "Username is required!" }]}
        >
          <CustomInput disabled size="large" placeholder="Username" />
        </Form.Item>
        {!isEdit ? (
          <Form.Item
            name="password"
            label={
              <label className="block text-light font-bold text-base">
                Password
              </label>
            }
            required={false}
          >
            <CustomPassword
              disabled
              size="large"
              placeholder="Password"
              defaultValue="********"
            />
          </Form.Item>
        ) : (
          <>
            <Form.Item
              name="oldPassword"
              label={
                <label className="block text-light font-bold text-base">
                  Old password
                </label>
              }
              required={false}
            >
              <CustomPassword size="large" placeholder="Old password" />
            </Form.Item>
            <Form.Item
              name="newPassword"
              label={
                <label className="block text-light font-bold text-base">
                  New password
                </label>
              }
              required={false}
            >
              <CustomPassword size="large" placeholder="New password" />
            </Form.Item>
          </>
        )}
        <div className="flex justify-end gap-x-2">
          <Button
            className="bg-transparent text-light hover:text-blue-400"
            onClick={() => setEdit(!isEdit)}
          >
            {!isEdit ? "Edit" : "Cancel"}
          </Button>
          {isEdit && (
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
}

export default UserInfo;
