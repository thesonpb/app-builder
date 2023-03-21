import React, { useContext } from "react";
import { PageBuilderContext } from "../../app/context/PageBuilderContext";
import ComponentConfig from "./ComponentConfig";
import ComponentPicker from "./ComponentPicker";
import EditorPage from "./EditorPage";
import { Editor } from "@craftjs/core";
import { DragDropItem } from "../../components/dragDropItem";
import { DragDropContainer } from "../../components/dragDropContainer";
import { RenderNode } from "../../components/editor/RenderNode";
import EditorHeader from "../../layouts/EditorHeader";
import { useQuery } from "react-query";
import Page from "../../app/models/Page";
import { useLocation } from "react-router-dom";

function PageBuilder() {
  const { pathname } = useLocation();
  const pathnameArray = pathname.split("/");
  const {
    isPreviewEditor,
    setCurrentProjectName,
    setCurrentProjectUserId,
    setProjectPreview,
  } = useContext(PageBuilderContext);
  const { data: pageJson } = useQuery(
    ["getPageDetail", pathname],
    async () => {
      // @ts-ignore
      const res = await Page.getPageDetail(
        Number(pathnameArray[pathnameArray.length - 1])
      );
      setCurrentProjectName(res.name);
      setProjectPreview(res.previewImage);
      setCurrentProjectUserId(res.userId);
      return res.json;
    },
    { initialData: "" }
  );
  return (
    <>
      {pageJson ? (
        <Editor
          enabled={!isPreviewEditor}
          resolver={{ ...DragDropItem, ...DragDropContainer }}
          onRender={RenderNode}
        >
          <EditorHeader />
          <div className="flex">
            <ComponentPicker />
            <EditorPage data={pageJson} />
            <ComponentConfig />
          </div>
        </Editor>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default PageBuilder;
