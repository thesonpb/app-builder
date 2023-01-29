import { useContext, useState } from "react";
import {
  Button,
  Dropdown,
  MenuProps,
  message,
  Popover,
  Select,
  Tooltip,
} from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PageBuilderContext } from "../app/context/PageBuilderContext";
import AppSmall from "../app/icons/AppSmall";
import ClockIcon from "../app/icons/ClockIcon";
import DownIcon from "../app/icons/DownIcon";
import FileSmall from "../app/icons/FileSmall";
import GlobalIcon from "../app/icons/GlobalIcon";
import EditPageIcon from "../app/icons/EditPageIcon";
import EyeIcon from "../app/icons/EyeIcon";
import Heart from "../app/icons/Heart";
import UserIcon from "../app/icons/User";
import Logout from "../app/icons/Logout";
import styled from "styled-components";
import Lock from "../app/icons/Lock";
import { useUser } from "../app/hooks";
import { AppContext } from "../app/context/AppContext";
import Auth from "../app/models/Auth";
import { useMutation, useQuery } from "react-query";
import Page from "../app/models/Page";
import { useEditor } from "@craftjs/core";
import User from "../app/models/User";

const CustomSelect = styled(Select)`
  .ant-select-selector {
    color: #e9ecef;
  }
  .ant-select-arrow {
    color: #e9ecef;
  }
`;

const items: MenuProps["items"] = [
  {
    label: (
      <Link className="flex gap-x-2 items-center" to={`/recent`}>
        <ClockIcon />
        <div className="text-sm font-semibold">Recent</div>
      </Link>
    ),
    key: "recent",
  },
  {
    label: (
      <Link className="flex gap-x-2 items-center" to={`/community`}>
        <GlobalIcon />
        <div className="text-sm font-semibold">Community</div>
      </Link>
    ),
    key: "community",
  },
  {
    type: "divider",
  },
  {
    key: "shortcuts",
    type: "group",
    label: <h1 className="m-0 text-sm font-bold text-light">Shortcuts</h1>,
    children: [
      //TODO: can co API lay danh sach shortcut trong Header va Sider
      {
        key: "shortcuts-1",
        label: (
          <Link
            to={`/app/1`}
            className="flex gap-x-2 items-center cursor-pointer rounded-md"
          >
            <div className="text-green-400">
              <FileSmall />
            </div>
            <div className="text-sm font-semibold">Page</div>
          </Link>
        ),
      },
      {
        key: "shortcuts-2",
        label: (
          <Link
            to={`/app/1`}
            className="flex gap-x-2 items-center cursor-pointer rounded-md"
          >
            <div className="text-blue-400">
              <AppSmall />
            </div>
            <div className="text-sm font-semibold">App</div>
          </Link>
        ),
      },
    ],
  },
];

interface SharePopupProps {
  pageId: string;
}
const SharePopup = ({ pageId }: SharePopupProps) => {
  const [searchUsername, setSearchUsername] = useState("");
  const [optionsUser, setOptionsUser] = useState();
  const [privacy, setPrivacy] = useState();
  const updateListUserMutation = useMutation(Page.updatePageListUser, {
    onSuccess: () => {
      refetchListSelectedUser();
    },
  });
  const updatePagePrivacyMutation = useMutation(Page.updatePagePrivacy, {
    onSuccess: (value) => {
      setPrivacy(value.privacy);
    },
  });
  const { data: pagePrivacy } = useQuery(
    ["getPagePrivacy", privacy],
    async () => {
      const res = await Page.getPagePrivacy(pageId);
      setPrivacy(privacy);
      return res;
    }
  );

  const { data: pageListUser, refetch: refetchListSelectedUser } = useQuery(
    ["getPageListUser"],
    async () => {
      return await Page.getPageListUser(pageId);
    }
  );

  useQuery(["getlist", searchUsername], async () => {
    const res = await User.getListUser(searchUsername);
    const temp = res.map((item: any) => ({
      value: item.id,
      label: item.userName,
    }));
    setOptionsUser(temp);
  });
  // @ts-ignore
  return (
    <div
      style={{ borderTop: "1px solid #e9ecef4f", minWidth: "22rem" }}
      className="py-4"
    >
      <Select
        placeholder="Add people"
        className="w-full"
        showSearch
        filterOption={(input, option) =>
          (option?.label?.toString() || "")
            .toLowerCase()
            .includes(input.toLowerCase())
        }
        options={optionsUser}
        onSearch={(value) => setSearchUsername(value)}
        onChange={(value: any) => {
          updateListUserMutation.mutate({
            id: pageId,
            listUser: [...pageListUser.map((item: any) => item.id), value],
          });
        }}
      />
      <div className="my-4 flex flex-col gap-y-2">
        {pageListUser?.map((item: any) => (
          <div key={item.id} className="flex justify-between items-center">
            <div>{item.userName}</div>
            <div className="flex gap-x-2">
              <Button
                onClick={() =>
                  updateListUserMutation.mutate({
                    id: pageId,
                    listUser: pageListUser
                      .map((el: any) => el.id)
                      .filter((el: any) => el !== item.id),
                  })
                }
                type="primary"
                className="bg-red-600"
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-2" style={{ borderTop: "1px solid #e9ecef4f" }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {pagePrivacy === "PUBLIC" ? <GlobalIcon /> : <Lock />}
            <CustomSelect
              defaultValue="PUBLIC"
              bordered={false}
              onChange={(value: any) => {
                updatePagePrivacyMutation.mutate({
                  page: {
                    privacy: value,
                  },
                  id: pageId,
                });
              }}
              options={[
                {
                  value: "PUBLIC",
                  label: "Public",
                },
                {
                  value: "PRIVATE",
                  label: "Private",
                },
              ]}
            />
          </div>
        </div>
        <Button type="primary" className="w-full mt-2">
          Copy link
        </Button>
      </div>
    </div>
  );
};

function EditorHeader() {
  const { pathname } = useLocation();
  const pathnameArray = pathname.split("/");
  const { query } = useEditor();
  const { setUser } = useContext(AppContext);
  const { user } = useUser();
  const {
    isPreviewEditor,
    setPreviewEditor,
    currentProjectName,
    currentProjectUserId,
  } = useContext(PageBuilderContext);
  const navigate = useNavigate();
  const userItems: MenuProps["items"] = [
    {
      label: (
        <Link className="flex gap-x-2 items-center" to={`/profile/${user?.id}`}>
          <UserIcon />
          <div className="text-sm font-semibold">My profile</div>
        </Link>
      ),
      key: "profile",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Link className="flex gap-x-2 items-center" to={`/likes`}>
          <Heart />
          <div className="text-sm font-semibold">My likes</div>
        </Link>
      ),
      key: "likes",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Link
          className="flex gap-x-2 items-center"
          to="#"
          onClick={async () => {
            setUser(null);
            await Auth.logout();
            navigate("/");
          }}
        >
          <Logout />
          <div className="text-sm font-semibold">Logout</div>
        </Link>
      ),
      key: "logout",
    },
  ];

  // @ts-ignore
  const updatePageJsonMutation = useMutation(Page.updatePageJson, {
    onSuccess: () => {
      message.success("Saved");
    },
  });
  // @ts-ignore
  return (
    <header
      className="h-16 bg-dark sticky top-0 z-50 flex items-center justify-between"
      style={{ borderBottom: "1px solid #525866" }}
    >
      <div className="w-60 h-full flex items-center justify-center">
        <>
          <div className="w-20 p-4">
            <Dropdown
              trigger={["click"]}
              menu={{ items }}
              placement="bottomRight"
            >
              <div>
                <Button
                  className="text-white"
                  type="text"
                  icon={<DownIcon />}
                />
              </div>
            </Dropdown>
          </div>
          <Tooltip title="Edit">
            <div
              className={`flex items-center justify-center cursor-pointer text-white w-20 h-full p-4 ${
                !isPreviewEditor && "bg-blue-400"
              }`}
              onClick={() => setPreviewEditor(false)}
            >
              <EditPageIcon />
            </div>
          </Tooltip>
          <Tooltip title="Preview">
            <div
              className={`flex items-center justify-center cursor-pointer text-white w-20 h-full p-4 ${
                isPreviewEditor && "bg-blue-400"
              }`}
              onClick={() => setPreviewEditor(true)}
            >
              <EyeIcon />
            </div>
          </Tooltip>
        </>
      </div>
      <h1 className="text-light text-xl">{currentProjectName}</h1>
      <div className="w-60 flex items-center gap-x-4 justify-end pr-4">
        <>
          {user?.id === currentProjectUserId && (
            <Popover
              content={
                <SharePopup pageId={pathnameArray[pathnameArray.length - 1]} />
              }
              title="Share"
              trigger="click"
            >
              <Button type="primary">Share</Button>
            </Popover>
          )}
          <Button
            type="primary"
            className="bg-greenest"
            onClick={() =>
              updatePageJsonMutation.mutate({
                id: pathnameArray[pathnameArray.length - 1],
                page: {
                  json: query.serialize(),
                },
              })
            }
          >
            Save
          </Button>
        </>
        {user?.id && (
          <Dropdown
            trigger={["click"]}
            menu={{ items: userItems }}
            placement="bottomRight"
          >
            <div>
              <Button className="w-8 h-8 rounded-full bg-amber-500 border-none"></Button>
            </div>
          </Dropdown>
        )}
      </div>
    </header>
  );
}

export default EditorHeader;
