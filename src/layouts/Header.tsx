import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Dropdown, MenuProps } from "antd";
import DownIcon from "../app/icons/DownIcon";
import ClockIcon from "../app/icons/ClockIcon";
import GlobalIcon from "../app/icons/GlobalIcon";
import FileSmall from "../app/icons/FileSmall";
import AppSmall from "../app/icons/AppSmall";
import HomeSmall from "../app/icons/HomeSmall";

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
    label: <h1 className="m-0 mb-2 text-sm font-bold">Shortcuts</h1>,
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
function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isCreateScreen =
    pathname.includes("/create-app") || pathname.includes("/create-page");
  return (
    <header
      className="h-16 bg-dark sticky top-0 z-50 flex items-center justify-between"
      style={{ borderBottom: "1px solid #525866" }}
    >
      <div className="w-60 h-full flex items-center justify-center">
        {isCreateScreen && (
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
        )}

        <h1
          className={`${
            isCreateScreen && "w-40"
          } text-textLight text-3xl cursor-pointer`}
          onClick={() => navigate("/")}
        >
          LOGO
        </h1>
      </div>
      <div className="flex items-center gap-x-4 px-4">
        <div className="text-light">notification</div>
        <div className="w-8 h-8 rounded-full bg-amber-500"></div>
      </div>
    </header>
  );
}

export default Header;
