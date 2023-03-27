import React, { useContext } from "react";
import { beUrl, feUrl } from "../../app/constants/baseUrl";
import { Link, useNavigate } from "react-router-dom";
import FileIcon from "../../app/icons/FileIcon";
import BookmarkIcon from "../../app/icons/BookmarkIcon";
import { Button, Dropdown, message, Modal } from "antd";
import MoreIcon from "../../app/icons/MoreIcon";
import { useUser } from "../../app/hooks";
import { useMutation } from "react-query";
import Page from "../../app/models/Page";
import BookmarkFillIcon from "../../app/icons/BookmarkFillIcon";
import { AppContext } from "../../app/context/AppContext";

function PagePreview({
  id,
  name,
  modifiedAt,
  previewImage,
  userId,
  listUserId,
  saved,
  addedToShortcut,
  refetchList,
}: any) {
  const { user } = useUser();
  const navigate = useNavigate();
  const { setAddToShortcut } = useContext(AppContext);
  const formatTime = (time: string) => {
    const date = new Date(time);
    const now = new Date();
    const diff = now.getTime() - date.getTime();

    if (diff < 60000) {
      return "Just now";
    } else if (diff < 3600000) {
      const min = Math.floor(diff / 60000);
      if (min <= 1) return `${min} minute ago`;

      return `${min} minutes ago`;
    } else if (diff < 86400000) {
      const hour = Math.floor(diff / 3600000);
      if (hour <= 1) return `${hour} hour ago`;

      return `${hour} hours ago`;
    } else if (diff < 604800000) {
      const days = Math.floor(diff / 86400000);
      if (days <= 1) return `${days} day ago`;

      return `${days} days ago`;
    } else {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day < 10 ? "0" + day : day}/${
        month < 10 ? "0" + month : month
      }/${year}`;
    }
  };
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(`${feUrl}/page/${id}`);
    message.success("Link copied!");
  };

  const canEditPage = () => {
    return !!(user?.id === userId || listUserId?.includes(user?.id));
  };

  const clonePage = useMutation(Page.clonePage, {
    onSuccess: (e) => {
      navigate(`/create-page/${e}`);
    },
  });

  const addToShortcut = useMutation(Page.addShortcut, {
    onSuccess: () => {
      setAddToShortcut(true);
      refetchList();
    },
  });
  const removeFromShortcut = useMutation(Page.deleteShortcut, {
    onSuccess: () => {
      setAddToShortcut(true);
      refetchList();
    },
  });

  const deletePage = useMutation(Page.deletePage, {
    onSuccess: () => {
      setAddToShortcut(true);
      refetchList();
    },
  });

  const items: any = [
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
        <Link
          className="flex gap-x-2 items-center"
          to="#"
          onClick={copyToClipBoard}
        >
          <div className="text-sm font-semibold">Copy link to page</div>
        </Link>
      ),
      key: "copy",
    },
    {
      label: (
        <Link
          className="flex gap-x-2 items-center"
          to={canEditPage() ? `/create-page/${id}` : "#"}
          onClick={() => {
            if (!canEditPage()) {
              clonePage.mutate(id);
            }
          }}
        >
          <div className="text-sm font-semibold">
            {canEditPage() ? "Go to editor" : "Clone this page"}
          </div>
        </Link>
      ),
      key: "editor",
    },
    canEditPage() && {
      label: (
        <Link
          className="flex gap-x-2 items-center"
          to="#"
          onClick={() => {
            !addedToShortcut
              ? addToShortcut.mutate(id)
              : removeFromShortcut.mutate(id);
          }}
        >
          <div className="text-sm font-semibold">
            {!addedToShortcut ? "Add to shortcut" : "Remove from shortcut"}
          </div>
        </Link>
      ),
      key: "shortcut",
    },
    user?.id === userId && {
      label: (
        <Link
          className="flex gap-x-2 items-center"
          to="#"
          // onClick={() => deletePage.mutate(id)}
        >
          <div className="text-sm font-semibold">Rename</div>
        </Link>
      ),
      key: "rename",
    },
    user?.id === userId && {
      label: (
        <Link
          className="flex gap-x-2 items-center"
          to="#"
          onClick={() =>
            Modal.confirm({
              title: "Do you want to delete this page?",
              onOk() {
                deletePage.mutate(id);
              },
              onCancel() {},
              okButtonProps: {
                danger: true,
              },
              okText: "Delete",
              className: "modal-confirm",
            })
          }
        >
          <div className="text-sm font-semibold">Delete</div>
        </Link>
      ),
      key: "delete",
    },
  ].filter(Boolean);

  return (
    <div
      className="relative group cursor-pointer w-full h-60 hover:shadow-lg hover:border-solid hover:border hover:border-border rounded-lg overflow-hidden p-2 flex flex-col justify-between"
      style={{
        transitionProperty: "box-shadow, border-color",
        transitionTimingFunction: "ease",
        transitionDuration: ".15s",
      }}
    >
      <div className="w-full h-44 border-solid border border-[#13122b12] rounded-lg overflow-hidden">
        <img
          onClick={() => {
            if (canEditPage()) navigate(`/create-page/${id}`);
          }}
          className="object-cover object-center"
          src={`${beUrl}/resources/images/${previewImage}`}
          alt={name}
        />
      </div>
      <div className="pt-2 flex items-center justify-between">
        <div
          className="flex gap-x-2 items-center"
          onClick={() => {
            if (canEditPage()) navigate(`/create-page/${id}`);
          }}
        >
          <div className="text-green-400">
            <FileIcon />
          </div>
          <div>
            <div className="text-sm font-medium text-light">{name}</div>
            <div className="text-xs text-gray-400">
              {formatTime(modifiedAt)}
            </div>
          </div>
        </div>
        <Button
          type="text"
          className={`px-1 ${
            !saved ? "hidden" : ""
          } group-hover:flex group-hover:items-center hover:bg-lightGray ${
            !saved ? "text-light" : "text-amber-500"
          }`}
        >
          {!saved ? <BookmarkIcon /> : <BookmarkFillIcon />}
        </Button>
        <div className="absolute top-4 right-3 z-50 h-6 hidden group-hover:flex group-hover:items-center">
          <Dropdown trigger={["hover"]} menu={{ items }} placement="bottomLeft">
            <Button className="px-1 border-none bg-lightGray text-light">
              <MoreIcon />
            </Button>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default PagePreview;
