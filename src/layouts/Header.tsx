import { useContext, useState } from "react";
import {
  Button,
  Dropdown,
  Input,
  MenuProps,
  Popover,
  Select,
  Tooltip,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { PageBuilderContext } from "../app/context/PageBuilderContext";
import AppSmall from "../app/icons/AppSmall";
import ClockIcon from "../app/icons/ClockIcon";
import DownIcon from "../app/icons/DownIcon";
import FileSmall from "../app/icons/FileSmall";
import GlobalIcon from "../app/icons/GlobalIcon";
import HomeSmall from "../app/icons/HomeSmall";
import EditPageIcon from "../app/icons/EditPageIcon";
import EyeIcon from "../app/icons/EyeIcon";
import Heart from "../app/icons/Heart";
import User from "../app/icons/User";
import Logout from "../app/icons/Logout";
import { Perrmissions } from "../app/models/interface";
import styled from "styled-components";
import Lock from "../app/icons/Lock";
import { useUser } from "../app/hooks";
import { AppContext } from "../app/context/AppContext";
import Auth from "../app/models/Auth";

const CustomSelect = styled(Select)`
  .ant-select-selector {
    color: #e9ecef;
  }
  .ant-select-arrow {
    color: #e9ecef;
  }
`;

interface Props {
  isCreateScreen: boolean;
}
const items: MenuProps["items"] = [
  {
    label: (
      <Link className="flex gap-x-2 items-center" to={`/home`}>
        <HomeSmall />
        <div className="text-sm font-semibold">Homepage</div>
      </Link>
    ),
    key: "home",
  },
  {
    type: "divider",
  },
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

interface SelectedUser {
  id: number;
  email: string;
  perrmission: Perrmissions;
}
const SharePopup = () => {
  //TODO: trong truong hop xem chi tiet thi can loc ra nhung nguoi da duoc them
  const [lstUsers, setLstUsers] = useState<Array<any>>([
    {
      value: 1,
      label: "mot@gmail.com",
    },
    {
      value: 2,
      label: "hai@gmail.com",
    },
    {
      value: 3,
      label: "a@gmail.com",
    },
    {
      value: 4,
      label: "b@gmail.com",
    },
    {
      value: 5,
      label: "c@gmail.com",
    },
  ]);
  //TODO: khoi tao gia tri bang nhung nguoi da duoc them
  const [selectedUsers, setSelectedUsers] = useState<Array<SelectedUser>>([]);
  //TODO: khoi tao gia tri bang privacy cua page
  const [privacy, setPrivacy] = useState<string>("public");
  return (
    <div
      style={{ borderTop: "1px solid #e9ecef4f", minWidth: "22rem" }}
      className="py-4"
    >
      <Select
        placeholder="Add people"
        className="w-full"
        showSearch
        options={lstUsers}
        onSearch={(value) => console.log(value)}
        onChange={(value: any, d: any) => {
          setSelectedUsers([
            ...selectedUsers,
            { email: d.label, id: value, perrmission: "view" },
          ]);
          setLstUsers(lstUsers?.filter((item) => item.value !== value));
        }}
      />
      <div className="my-4 flex flex-col gap-y-2">
        {selectedUsers?.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div>{item.email}</div>
            <div className="flex gap-x-2">
              <CustomSelect
                defaultValue="view"
                bordered={false}
                onChange={(value) => {
                  //TODO: update hear
                  alert(
                    `update permission of user ${item.id} to value ${value} with this page`
                  );
                }}
                options={[
                  {
                    value: "view",
                    label: "Can view",
                  },
                  {
                    value: "edit",
                    label: "Can edit",
                  },
                ]}
              />
              <Button
                onClick={() => {
                  setSelectedUsers(
                    selectedUsers?.filter((user) => user.id !== item.id)
                  );
                  setLstUsers([
                    ...lstUsers,
                    { label: item.email, value: item.id },
                  ]);
                }}
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
            {privacy === "public" ? <GlobalIcon /> : <Lock />}
            <CustomSelect
              defaultValue="public"
              bordered={false}
              onChange={(value: any) => {
                //TODO: update hear
                setPrivacy(value);
              }}
              options={[
                {
                  value: "public",
                  label: "Anyone with the link",
                },
                {
                  value: "private",
                  label: "Only people added to this page",
                },
              ]}
            />
          </div>
          <div>{privacy === "public" ? "can view" : "can access"}</div>
        </div>
        <Button type="primary" className="w-full mt-2">
          Copy link
        </Button>
      </div>
    </div>
  );
};

const ExportPopup = () => {
  const [nameExport, setNameExport] = useState<string>("Untitled");
  const [typeExport, setTypeExport] = useState<string>("pdf");
  return (
    <div style={{ borderTop: "1px solid #e9ecef4f" }} className="py-4">
      <div className="flex justify-between items-center">
        <Input
          className="w-3/5"
          placeholder="Filename"
          onChange={(e) => setNameExport(e.target.value)}
        />
        <CustomSelect
          className="w-2/5"
          defaultValue="pdf"
          bordered={false}
          onChange={(value: any) => {
            setTypeExport(value);
          }}
          options={[
            {
              value: "pdf",
              label: "PDF",
            },
            {
              value: "html",
              label: "HTML",
            },
          ]}
        />
      </div>
      <Button
        type="default"
        className="w-full mt-4 bg-transparent text-light font-semibold border border-solid border-light"
        onClick={() => alert(`Export ${nameExport}.${typeExport}`)}
      >
        Export
      </Button>
    </div>
  );
};

function Header({ isCreateScreen }: Props) {
  const { setUser } = useContext(AppContext);
  const { user } = useUser();
  const { isPreviewEditor, setPreviewEditor } = useContext(PageBuilderContext);
  const navigate = useNavigate();
  const userItems: MenuProps["items"] = [
    {
      label: (
        <Link className="flex gap-x-2 items-center" to={`/profile/${user?.id}`}>
          <User />
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

  return (
    <header
      className="h-16 bg-dark sticky top-0 z-50 flex items-center justify-between"
      style={{ borderBottom: "1px solid #525866" }}
    >
      <div className="w-60 h-full flex items-center justify-center">
        {isCreateScreen ? (
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
        ) : (
          <h1
            className={`${
              isCreateScreen && "w-40"
            } text-textLight text-3xl cursor-pointer`}
            onClick={() => navigate("/home")}
          >
            LOGO
          </h1>
        )}
      </div>
      <div className="w-60 flex items-center gap-x-4 justify-end pr-4">
        {isCreateScreen && (
          <>
            <Popover content={<SharePopup />} title="Share" trigger="click">
              <Button type="primary">Share</Button>
            </Popover>
            <Popover content={<ExportPopup />} title="Export" trigger="click">
              <Button type="primary" className="bg-greenest">
                Export
              </Button>
            </Popover>
          </>
        )}
        {!user?.id ? (
          <div className="flex gap-x-2">
            <Button type="primary" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button type="default" onClick={() => navigate("/signup")}>
              Signup
            </Button>
          </div>
        ) : (
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

export default Header;
