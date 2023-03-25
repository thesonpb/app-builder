import React, { useContext } from "react";
import { Button, Divider, Form, message, Tag, Upload } from "antd";
import { useUser } from "../../app/hooks";
import { beUrl, feUrl } from "../../app/constants/baseUrl";
import { useMutation, useQuery } from "react-query";
import { AppContext } from "../../app/context/AppContext";
import User from "../../app/models/User";
import styled from "styled-components";
import EditIcon from "../../app/icons/EditIcon";
import UserInfo from "./UserInfo";
import SavedPage from "./SavedPage";
import { CopyOutlined } from "@ant-design/icons";

const CustomUpload = styled(Upload)`
  .ant-upload {
    border: none !important;
    background: none !important;
    position: absolute;
    bottom: -10px;
    left: 10px;
  }
`;

const CoverUpload = styled(Upload)`
  .ant-upload {
    border: none !important;
    background: none !important;
    position: absolute;
    right: 4px;
    top: -11px;
  }
`;

function MyProfile({ id }: any) {
  const { user } = useUser();
  const { setUser } = useContext(AppContext);
  const [form] = Form.useForm();
  const { data: userData, refetch } = useQuery(
    ["getUserProfileData", id],
    async () => {
      const res = await User.getUserDetail(id);
      form.setFieldsValue({ ...res });
      return res;
    },
    {
      initialData: {},
    }
  );
  const updateAvatar = useMutation(User.updateAvatar, {
    onSuccess: (e) => {
      const localUser = JSON.parse(localStorage.getItem("user") || "");
      localUser.photos = e;
      setUser(localUser);
      localStorage.setItem("user", JSON.stringify(localUser));
      message.success("Cập nhật ảnh đại diện thành công");
    },
    onError: () => {
      message.error("Cập nhật ảnh đại diện thất bại");
    },
  });

  const updateCover = useMutation(User.updateCover, {
    onSuccess: (e) => {
      const localUser = JSON.parse(localStorage.getItem("user") || "");
      localUser.cover = e;
      setUser(localUser);
      localStorage.setItem("user", JSON.stringify(localUser));
      message.success("Cập nhật ảnh bìa thành công");
    },
    onError: () => {
      message.error("Cập nhật ảnh bìa thất bại");
    },
  });

  const handleUploadCover = (info: any) => {
    if (info.file.status === "done") {
      updateCover.mutate({
        avatar: `${info.file.response}`,
      });
    } else if (info.file.status === "error") {
      message.error("Đã có lỗi xảy ra");
    }
  };

  const handleUpload = (info: any) => {
    if (info.file.status === "done") {
      updateAvatar.mutate({
        avatar: `${info.file.response}`,
      });
    } else if (info.file.status === "error") {
      message.error("Đã có lỗi xảy ra");
    }
  };
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(`${feUrl}/profile/${id}`);
    message.success("Link copied!");
  };
  return (
    <div className="bg-dark main-content flex justify-center">
      <div className="w-2/3">
        <div className="relative h-80">
          {user?.cover ? (
            <img
              className="w-full h-60 object-cover"
              src={`${beUrl}/resources/images/${user?.cover}`}
              alt="cover"
            />
          ) : (
            <div className="w-full h-60 bg-greenest"></div>
          )}
          <CoverUpload
            name="file"
            listType="picture-card"
            showUploadList={false}
            action={`${beUrl}/api/upload/image`}
            onChange={handleUploadCover}
          >
            <Button className="px-2 flex items-center justify-center bg-dark text-white opacity-75">
              <EditIcon />
            </Button>
          </CoverUpload>
          <div className="flex">
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
              <Tag color="#2db7f5">20 public pages</Tag>
              <Tag color="#87d068">1k users saved your pages</Tag>
            </div>
          </div>
          <CustomUpload
            name="file"
            listType="picture-card"
            showUploadList={false}
            action={`${beUrl}/api/upload/image`}
            onChange={handleUpload}
          >
            {user?.photos ? (
              <img
                src={`${beUrl}/resources/images/${user?.photos}`}
                alt="avatar"
                className="object-cover object-center rounded-full w-40 h-40"
              />
            ) : (
              <div className="border-solid border border-white rounded-full w-40 h-40 bg-blue-400" />
            )}
          </CustomUpload>
        </div>
        <Divider className="mt-16" style={{ background: "#525866" }} />
        <div className="flex">
          <div className="w-1/4">
            <UserInfo userData={userData} form={form} refetch={refetch} />
          </div>
          <div style={{ borderRight: "1px solid #525866" }} />
          <div className="w-3/4">
            <SavedPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
