import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Page from "../../app/models/Page";
import { Editor, Frame } from "@craftjs/core";
import { DragDropItem } from "../../components/dragDropItem";
import { DragDropContainer } from "../../components/dragDropContainer";

function PageView() {
  const { username, pagename } = useParams();
  const { data: pageDetail } = useQuery(["getPageDetailJson"], async () => {
    // @ts-ignore
    const res = await Page.getPageJson(username, pagename);
    if (res === "Page not found" || !res) return null;
    return res;
  });
  return (
    <div>
      {pageDetail ? (
        <div>
          <Editor
            resolver={{ ...DragDropItem, ...DragDropContainer }}
            enabled={false}
          >
            <Frame data={pageDetail} />
          </Editor>
        </div>
      ) : (
        <div>error handling</div>
      )}
    </div>
  );
}

export default PageView;
