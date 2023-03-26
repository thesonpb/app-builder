import React from "react";
import { Dropdown, Layout, MenuProps } from "antd";
import AddIcon from "../app/icons/AddIcon";
import FileIcon from "../app/icons/FileIcon";
import FileSmall from "../app/icons/FileSmall";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GlobalIcon from "../app/icons/GlobalIcon";
import ArchiveIcon from "../app/icons/ArchiveIcon";
import { useMutation, useQuery } from "react-query";
import Page from "../app/models/Page";
import MoreIcon from "../app/icons/MoreIcon";

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
  const { data: shortcutList, refetch } = useQuery(
    ["getListShorcut"],
    async () => {
      return await Page.getListShortcut();
    },
    { initialData: [] }
  );

  const deleteShortcut = useMutation(Page.deleteShortcut, {
    onSuccess: () => {
      refetch();
    },
  });

  const renderShortcut = ({ name, id }: Shortcut) => {
    const items: MenuProps["items"] = [
      {
        label: (
          <Link
            target="_blank"
            className="flex gap-x-2 items-center"
            to={`/page/${id}`}
          >
            <div className="text-sm font-semibold">Go to page</div>
          </Link>
        ),
        key: "page",
      },
      {
        label: (
          <Link className="flex gap-x-2 items-center" to={`/create-page/${id}`}>
            <div className="text-sm font-semibold">Go to editor</div>
          </Link>
        ),
        key: "editor",
      },
      {
        label: (
          <Link
            className="flex gap-x-2 items-center"
            to="#"
            onClick={() => deleteShortcut.mutate(id)}
          >
            <div className="text-sm font-semibold">Delete</div>
          </Link>
        ),
        key: "delete",
      },
    ];
    return (
      <div
        key={id}
        className="select-none flex justify-between items-center hover:bg-lightGray py-1 px-2 cursor-pointer rounded-md group"
      >
        <div
          className="flex items-center gap-x-2 h-6"
          onClick={() => navigate(`/create-page/${id}`)}
        >
          <div className="text-green-400 flex items-center">
            <FileSmall />
          </div>
          <div className="text-sm font-semibold">{name}</div>
        </div>
        <div className="h-6 hidden group-hover:flex group-hover:items-center">
          <Dropdown
            trigger={["click"]}
            menu={{ items }}
            placement="bottomRight"
          >
            <div>
              <MoreIcon />
            </div>
          </Dropdown>
        </div>
      </div>
    );
  };

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
        {shortcutList.map((item: any) => renderShortcut(item))}
      </div>
    </AntSider>
  );
}

export default Sider;
