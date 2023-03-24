import React from "react";
import { useQuery } from "react-query";
import User from "../../app/models/User";
import { message, Spin } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { feUrl } from "../../app/constants/baseUrl";

function UserInfo({ id }: any) {
  const { data: userData, isFetching } = useQuery(
    ["getUserProfileData", id],
    async () => {
      return await User.getUserDetail(id);
    },
    {
      initialData: {},
    }
  );
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(`${feUrl}/profile/${id}`);
    message.success("Link copied!");
  };

  return (
    <Spin spinning={isFetching}>
      <div className="px-4">
        <h3 className="mt-0 mb-4 text-light">Personal information</h3>
        <div className=" tracking-wide text-xl text-indigo-500 font-semibold">
          {userData?.firstName} {userData?.lastName}
        </div>
        <p
          className="mt-0 text-gray-500 hover:text-gray-200 cursor-pointer"
          onClick={copyToClipBoard}
        >
          @{userData?.userName} <CopyOutlined />
        </p>
      </div>
    </Spin>
  );
}

export default UserInfo;
