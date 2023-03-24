import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Page from "../../app/models/Page";
import { Editor, Frame } from "@craftjs/core";
import { DragDropItem } from "../../components/dragDropItem";
import { DragDropContainer } from "../../components/dragDropContainer";
import { useUser } from "../../app/hooks";
import PageNotFound from "../PageNotFound";

function PageView() {
  const { user } = useUser();
  const [pageJson, setPageJson] = useState("");
  const [listUser, setListUser] = useState<number[]>([]);
  const [isPublic, setPublic] = useState(false);
  const { id } = useParams();
  useQuery(["getListUserOfPage", id], async () => {
    const res = await Page.getPageListUser(Number(id));
    setListUser(res?.map((item: any) => item.id));
  });
  useQuery(["getPageDetailBuilderView", id], async () => {
    const res = await Page.getPageDetail(Number(id));
    setPublic(res.privacy === "PUBLIC");
    setPageJson(res.json);
  });
  return isPublic || (user && listUser?.includes(user?.id)) ? (
    <div>
      {pageJson ? (
        <div>
          <Editor
            resolver={{ ...DragDropItem, ...DragDropContainer }}
            enabled={false}
          >
            <Frame data={pageJson} />
          </Editor>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  ) : (
    <PageNotFound />
  );
}

export default PageView;
