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
  const [creatorId, setCreatorId] = useState(-1);
  const { id } = useParams();

  useQuery(["getPageView", id], async () => {
    const res = await Page.getPageView(Number(id));
    setListUser(res?.listUser?.map((item: any) => item.id));
    setPublic(res.page.privacy === "PUBLIC");
    setPageJson(res.page.json);
    setCreatorId(res.page.userId);
  });

  return isPublic ||
    (user?.id && listUser?.includes(user?.id)) ||
    user?.id === creatorId ? (
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
