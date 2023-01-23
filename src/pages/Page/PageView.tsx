import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Page from "../../app/models/Page";
import { Editor, Frame } from "@craftjs/core";
import { DragDropItem } from "../../components/dragDropItem";
import { DragDropContainer } from "../../components/dragDropContainer";

function PageView() {
  const { username, pagename, id } = useParams();
  const { data: pageDetail } = useQuery(["getPageDetail"], async () => {
    return await Page.getPageDetail(Number(id));
  });
  return (
    <div>
      {pageDetail ? (
        <div>
          <Editor
            resolver={{ ...DragDropItem, ...DragDropContainer }}
            enabled={false}
          >
            <Frame data={pageDetail.json} />
          </Editor>
        </div>
      ) : (
        <div>error handling</div>
      )}
    </div>
  );
}

export default PageView;
