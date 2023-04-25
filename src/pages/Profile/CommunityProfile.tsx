import React from "react";
import { beUrl, feUrl } from "../../app/constants/baseUrl";
import { Divider, message } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { useQuery } from "react-query";
import User from "../../app/models/User";
import styled from "styled-components";
import PublicPageOfUser from "./PublicPageOfUser";
import { copyToClipboard } from "../../app/common/commonFunctiton";

const CustomImg = styled.img`
  position: absolute;
  bottom: -40px;
  left: 20px;
`;
const CustomDiv = styled.div`
  position: absolute;
  bottom: -40px;
  left: 20px;
`;
function CommunityProfile({ id }: any) {
  const { data: userData } = useQuery(
    ["getUserProfileData", id],
    async () => {
      return await User.getUserDetail(id);
    },
    {
      initialData: {},
    }
  );
  const copyToClipBoard = async () => {
    try {
      await copyToClipboard(`${feUrl}/profile/${id}`);
      console.log("Text copied to the clipboard!");
    } catch (error) {
      console.error(error);
    }
    message.success("Link copied!");
  };
  return (
    <div className="bg-dark main-content flex justify-center">
      <div className="w-2/3">
        <div className="relative h-80">
          {userData?.cover ? (
            <img
              className="w-full h-60 object-cover"
              src={`${beUrl}/resources/images/${userData?.cover}`}
              alt="cover"
            />
          ) : (
            <div className="w-full h-60 bg-greenest"></div>
          )}
          <div className="flex mt-5">
            <div className="w-52"></div>
            <div className="">
              <div className=" tracking-wide text-2xl text-light font-semibold">
                {userData?.firstName} {userData?.lastName}
              </div>
              <p
                className="mt-0 text-gray-500 text-base hover:text-gray-200 cursor-pointer"
                onClick={copyToClipBoard}
              >
                @{userData?.userName} <CopyOutlined />
              </p>
            </div>
          </div>
          {userData?.photos ? (
            <CustomImg
              src={`${beUrl}/resources/images/${userData?.photos}`}
              alt="avatar"
              className="object-cover object-center rounded-full w-40 h-40"
            />
          ) : (
            <CustomDiv className="border-solid border border-white rounded-full w-40 h-40 bg-blue-400" />
          )}
        </div>
        <Divider className="mt-16" style={{ background: "#525866" }} />
        <div className="flex">
          <div className="w-full">
            <PublicPageOfUser name={userData?.userName} id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityProfile;
