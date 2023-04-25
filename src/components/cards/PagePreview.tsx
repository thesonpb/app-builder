import React, { useContext, useState } from "react";
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
import RenamePageModal from "../popups/RenamePageModal";
import { copyToClipboard } from "../../app/common/commonFunctiton";

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
  creatorPhoto,
  creatorName,
}: any) {
  const { user } = useUser();
  const navigate = useNavigate();
  const [isShowRenameModal, setShowRenameModal] = useState(false);
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
  const copyToClipBoard = async () => {
    try {
      await copyToClipboard(`${feUrl}/page/${id}`);
      console.log("Text copied to the clipboard!");
    } catch (error) {
      console.error(error);
    }
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

  const saveBook = useMutation(Page.savePage, {
    onSuccess: () => {
      refetchList();
    },
  });
  const unsaveBook = useMutation(Page.unsavePage, {
    onSuccess: () => {
      refetchList();
    },
  });

  const deletePage = useMutation(Page.deletePage, {
    onSuccess: () => {
      setAddToShortcut(true);
      refetchList();
    },
  });

  const displayAvatar = () => {
    return creatorPhoto ? (
      <img
        src={`${beUrl}/resources/images/${creatorPhoto}`}
        alt={creatorName}
        className="w-8 h-8 rounded-full"
      />
    ) : (
      <div className="w-8 h-8 rounded-full bg-blue-400 border-solid border border-border" />
    );
  };

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
          onClick={() => setShowRenameModal(true)}
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
          src={`${beUrl}/resources/images/${previewImage}`}
          alt={name}
          className="object-center object-cover"
          // style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="pt-2 flex items-center justify-between">
        <div className="flex gap-x-2 items-center">
          <div
            className="text-green-400"
            onClick={() => {
              if (canEditPage() && user?.id === userId)
                navigate(`/create-page/${id}`);
              else navigate(`/profile/${userId}`);
            }}
          >
            {canEditPage() && user?.id === userId ? (
              <FileIcon />
            ) : (
              displayAvatar()
            )}
          </div>
          <div>
            <div
              className="text-sm font-medium text-light truncate"
              style={{ maxWidth: "200px" }}
              onClick={() => {
                if (canEditPage()) navigate(`/create-page/${id}`);
              }}
            >
              {name}
            </div>
            <div
              className="text-xs text-gray-400"
              onClick={() => {
                if (canEditPage() && user?.id === userId)
                  navigate(`/create-page/${id}`);
                else navigate(`/profile/${userId}`);
              }}
            >
              {canEditPage() && user?.id === userId
                ? formatTime(modifiedAt)
                : creatorName}
            </div>
          </div>
        </div>
        <Button
          type="text"
          className={`px-1 flex-shrink-0 ${
            !saved ? "hidden" : ""
          } group-hover:flex group-hover:items-center hover:bg-lightGray ${
            !saved ? "text-light" : "text-amber-500"
          }`}
          onClick={() => {
            if (!saved) {
              saveBook.mutate(id);
            } else {
              unsaveBook.mutate(id);
            }
          }}
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
      {isShowRenameModal && (
        <RenamePageModal
          visible={isShowRenameModal}
          setVisible={setShowRenameModal}
          refetchList={refetchList}
          id={id}
        />
      )}
    </div>
  );
}

export default PagePreview;
