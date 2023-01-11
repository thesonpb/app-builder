import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  url?: string;
}

export default function PageNotFound({ url = "/" }: Props) {
  const navigate = useNavigate();
  return (
    <div className=" pt-22 flex  flex-col items-center dark:text-dark">
      <h1 style={{ fontSize: "200px" }} className="m-0">
        Oops!
      </h1>
      <h1 className=" text-4xl mb-10">404 - PAGE NOT FOUND</h1>
      <Button
        type="primary"
        className="text-xl rounded-full py-4 h-max font-medium"
        size="large"
        onClick={() => navigate(url)}
      >
        GO TO HOMEPAGE
      </Button>
    </div>
  );
}
