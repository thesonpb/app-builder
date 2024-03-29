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
import DownIcon from "../app/icons/DownIcon";
import FileSmall from "../app/icons/FileSmall";
import GlobalIcon from "../app/icons/GlobalIcon";
import EditPageIcon from "../app/icons/EditPageIcon";
import EyeIcon from "../app/icons/EyeIcon";
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
import { exportReactCode } from "../app/common/componentConvertReact";
import { exportVueCode } from "../app/common/componentConvertVue";
import ReactIcon from "../app/icons/ReactIcon";
import VueIcon from "../app/icons/VueIcon";
import ArchiveIcon from "../app/icons/ArchiveIcon";
import { beUrl, feUrl } from "../app/constants/baseUrl";
import { copyToClipboard } from "../app/common/commonFunctiton";

const CustomSelect = styled(Select)`
  .ant-select-selector {
    color: #e9ecef;
  }
  .ant-select-arrow {
    color: #e9ecef;
  }
`;

const ExportPopup = ({ query, currentProjectName }: any) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button
        type="primary"
        className="bg-[#087da4] hover:bg-[#075e7a] w-24 flex items-center gap-x-2"
        onClick={() => exportReactCode(query.serialize(), currentProjectName)}
        icon={<ReactIcon />}
      >
        React
      </Button>
      <Button
        type="primary"
        className="bg-[#42b883] hover:bg-[#2d805a] w-24 flex items-center gap-x-2"
        onClick={() => exportVueCode(query.serialize(), currentProjectName)}
        icon={<VueIcon />}
      >
        Vue
      </Button>
    </div>
  );
};

interface SharePopupProps {
  pageId: string;
}
const SharePopup = ({ pageId }: SharePopupProps) => {
  const { user } = useUser();
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
    const temp = res
      .filter((item: any) => item.id !== user?.id)
      .map((item: any) => ({
        value: item.id,
        label: item.userName,
      }));
    setOptionsUser(temp);
  });
  const copyToClipBoard = async () => {
    try {
      await copyToClipboard(`${feUrl}/page/${pageId}`);
      console.log("Text copied to the clipboard!");
    } catch (error) {
      console.error(error);
    }
    message.success("Link copied!");
  }; // @ts-ignore
  return (
    <div
      style={{ borderTop: "1px solid #e9ecef4f", minWidth: "22rem" }}
      className="py-4"
    >
      <Select
        placeholder="Add people"
        className="w-full invite-editor"
        showSearch
        filterOption={(input, option) =>
          (option?.label?.toString() || "")
            .toLowerCase()
            .includes(input.toLowerCase())
        }
        options={optionsUser}
        value={null}
        onSearch={(value) => setSearchUsername(value)}
        onChange={(value: any) => {
          updateListUserMutation.mutate({
            id: pageId,
            listUser: [...pageListUser.map((item: any) => item.id), value],
          });
        }}
      />
      <div className="my-4 flex flex-col gap-y-2">
        {updateListUserMutation.isLoading && (
          <div className="loader">
            <div />
            <div />
            <div />
            <div />
          </div>
        )}
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
            {pagePrivacy && (
              <CustomSelect
                defaultValue={pagePrivacy}
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
            )}
          </div>
        </div>
        <Button
          onClick={copyToClipBoard}
          type="primary"
          className="w-full mt-2"
        >
          Copy link to the page
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
  const { setSavedSuccess } = useContext(PageBuilderContext);
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

  const { data: shortcutList } = useQuery(
    ["getListShorcutHeader"],
    async () => {
      return await Page.getListShortcut();
    },
    { initialData: [] }
  );
  const items: MenuProps["items"] = [
    {
      label: (
        <Link className="flex gap-x-2 items-center" to={`/my-pages`}>
          <ArchiveIcon />
          <div className="text-sm font-semibold">My Pages</div>
        </Link>
      ),
      key: "my-pages",
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
      children: shortcutList?.map((shortcutItem: any) => ({
        key: shortcutItem?.id,
        label: (
          <Tooltip title={shortcutItem?.name}>
            <Link
              to={`/create-page/${shortcutItem?.id}`}
              className="flex gap-x-2 items-center cursor-pointer rounded-md w-20"
            >
              <div className="text-green-400">
                <FileSmall />
              </div>
              <div className="text-sm font-semibold truncate">
                {shortcutItem?.name}
              </div>
            </Link>
          </Tooltip>
        ),
      })),
    },
  ];

  // @ts-ignore
  const updatePageJsonMutation = useMutation(Page.updatePageJson, {
    onSuccess: () => {
      setSavedSuccess(true);
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
              <Button type="primary" className="bg-orange-400">
                Share
              </Button>
            </Popover>
          )}
          <Button
            type="primary"
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
          <Popover
            content={
              <ExportPopup
                query={query}
                currentProjectName={currentProjectName}
              />
            }
            title="Export code"
            trigger="click"
          >
            <Button type="primary" className="bg-greenest">
              Export
            </Button>
          </Popover>
        </>
        {user?.id && (
          <Dropdown
            trigger={["click"]}
            menu={{ items: userItems }}
            placement="bottomRight"
          >
            <div>
              {user?.photos ? (
                <img
                  className="w-8 h-8 rounded-full bg-white border-none"
                  src={`${beUrl}/resources/images/${user?.photos}`}
                  alt="avatar"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-white border-none" />
              )}
            </div>
          </Dropdown>
        )}
      </div>
    </header>
  );
}

export default EditorHeader;
