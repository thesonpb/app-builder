import React from "react";
import { beUrl } from "../../app/constants/baseUrl";
import { useNavigate } from "react-router-dom";
import FileIcon from "../../app/icons/FileIcon";

function ProjectPreview({ id, name, modifiedAt, previewImage }: any) {
  const navigate = useNavigate();

  const formatTime = (time: string) => {
    const date = new Date(time);
    const now = new Date();
    const diff = now.getTime() - date.getTime();

    if (diff < 3600000) {
      const min = Math.floor(diff / 60000);
      if (min <= 1) return `${min} minute ago`;

      return `${min} minutes ago`;
    } else if (diff < 86400000) {
      const hour = Math.floor(diff / 3600000);
      if (hour <= 1) return `${hour} hour ago`;

      return `${hour} hours ago`;
    } else {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day < 10 ? "0" + day : day}/${
        month < 10 ? "0" + month : month
      }/${year}`;
    }
  };

  return (
    <div
      className="cursor-pointer w-full h-60 hover:shadow-md border-solid border border-[#0000] rounded-lg overflow-hidden p-2 flex flex-col justify-between"
      style={{
        transitionProperty: "box-shadow, border-color",
        transitionTimingFunction: "ease",
        transitionDuration: ".15s",
      }}
      onClick={() => navigate(`/create-page/${id}`)}
    >
      <div className="w-full h-44 border-solid border border-[#13122b12] rounded-lg overflow-hidden">
        <img
          className="object-cover object-center"
          src={`${beUrl}/resources/images/${previewImage}`}
          alt={name}
        />
      </div>
      <div className="pt-2 flex gap-x-2 items-center">
        <FileIcon />
        <div className="">
          <div className="text-sm text-gray-800 font-medium">{name}</div>
          <div className="text-xs text-gray-500">{formatTime(modifiedAt)}</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPreview;
