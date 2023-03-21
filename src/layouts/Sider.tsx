import React from "react";
import { Layout } from "antd";
import AddIcon from "../app/icons/AddIcon";
import FileIcon from "../app/icons/FileIcon";
import FileSmall from "../app/icons/FileSmall";
import AppSmall from "../app/icons/AppSmall";
import { useLocation, useNavigate } from "react-router-dom";
import GlobalIcon from "../app/icons/GlobalIcon";
import ArchiveIcon from "../app/icons/ArchiveIcon";

const { Sider: AntSider } = Layout;

interface Shortcut {
  type: string;
  name: string;
  id: number;
}
interface Props {
  setType: Function;
  setVisible: Function;
}
function Sider({ setType, setVisible }: Props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const renderShortcut = ({ type, name, id }: Shortcut) => (
    <div
      key={id}
      className="select-none flex gap-x-2 items-center hover:bg-lightGray py-1 px-2 cursor-pointer rounded-md"
      onClick={() => navigate(`/${type}/${id}`)}
    >
      {type === "page" ? (
        <div className="text-green-400">
          <FileSmall />
        </div>
      ) : (
        <div className="text-blue-400">
          <AppSmall />
        </div>
      )}
      <div className="text-sm font-semibold">{name}</div>
    </div>
  );

  return (
    <AntSider
      className="overflow-hidden hover:overflow-auto fixed top-0 h-screen pt-16"
      style={{
        borderRight: "1px solid #525866",
        backgroundColor: "#343a40",
      }}
      width={240}
    >
      <div
        className="flex flex-col gap-y-2 p-4"
        style={{
          borderBottom: "1px solid #525866",
        }}
      >
        <div
          className="w-full select-none flex items-center justify-between rounded-md text-light p-4 hover:bg-lightGray cursor-pointer"
          style={{ border: "1px solid #525866" }}
          onClick={() => {
            setType("PAGE");
            setVisible(true);
          }}
        >
          <div className="flex gap-x-2 items-center">
            <div className="text-green-400">
              <FileIcon />
            </div>
            <div className="text-sm font-semibold">New page</div>
          </div>
          <AddIcon />
        </div>
      </div>
      <div
        className="flex flex-col py-4 text-light"
        style={{
          borderBottom: "1px solid #525866",
        }}
      >
        <div
          className={`select-none cursor-pointer flex px-4 gap-x-2 hover:bg-lightGray py-1.5 items-center ${
            pathname === "/my-pages" && "bg-lightGray"
          }`}
          onClick={() => navigate("/my-pages")}
        >
          <ArchiveIcon />
          <div className="text-sm font-semibold">My Pages</div>
        </div>
        <div
          className={`select-none cursor-pointer flex px-4 gap-x-2 hover:bg-lightGray py-1.5 items-center ${
            pathname === "/community" && "bg-lightGray"
          }`}
          onClick={() => navigate("/community")}
        >
          <GlobalIcon />
          <div className="text-sm font-semibold">Community</div>
        </div>
      </div>
      <div
        className="flex flex-col p-4 text-light"
        style={{
          borderBottom: "1px solid #525866",
        }}
      >
        <h1 className="m-0 mb-2 text-sm font-bold">Shortcuts</h1>
        {[
          { type: "page", name: "page no 1", id: 1 },
          { type: "page", name: "page no 2", id: 2 },
        ].map((item) => renderShortcut(item))}
      </div>
    </AntSider>
  );
}

export default Sider;
