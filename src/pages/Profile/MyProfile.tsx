import React, { useContext } from "react";
import { Button, Divider, message, Upload } from "antd";
import { useUser } from "../../app/hooks";
import { beUrl } from "../../app/constants/baseUrl";
import { useMutation } from "react-query";
import { AppContext } from "../../app/context/AppContext";
import User from "../../app/models/User";
import styled from "styled-components";
import EditIcon from "../../app/icons/EditIcon";
import UserInfo from "./UserInfo";
import SavedPage from "./SavedPage";

const CustomUpload = styled(Upload)`
  .ant-upload {
    border: none !important;
    background: none !important;
    position: absolute;
    bottom: -20px;
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

  return (
    <div className="bg-dark main-content flex justify-center">
      <div className="w-2/3">
        <div className="relative h-60">
          {user?.cover ? (
            <img
              className="w-full h-full object-cover"
              src={`${beUrl}/resources/images/${user?.cover}`}
              alt="cover"
            />
          ) : (
            <div className="w-full h-full bg-greenest"></div>
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
                className="rounded-full w-20 h-20"
              />
            ) : (
              <div className="border-solid border border-white rounded-full w-20 h-20">
                Upload
              </div>
            )}
          </CustomUpload>
        </div>
        <Divider className="mt-8" style={{ background: "#525866" }} />
        <div className="flex">
          <div className="w-1/4">
            <UserInfo id={id} />
          </div>
          <Divider style={{ background: "#525866" }} type="vertical" />
          <div className="w-3/4">
            <SavedPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
