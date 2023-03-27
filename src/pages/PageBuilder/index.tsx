import React, { useContext, useState } from "react";
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
import PageNotFound from "../PageNotFound";

function PageBuilder() {
  const [pageJson, setPageJson] = useState("");
  const { pathname } = useLocation();
  const pathnameArray = pathname.split("/");
  const {
    isPreviewEditor,
    setCurrentProjectName,
    setCurrentProjectUserId,
    setProjectPreview,
  } = useContext(PageBuilderContext);
  const { isError } = useQuery(["getPageDetailBuilder", pathname], async () => {
    // @ts-ignore
    const res = await Page.getPageDetail(
      Number(pathnameArray[pathnameArray.length - 1])
    );
    setCurrentProjectName(res.name);
    setProjectPreview(res.previewImage);
    setCurrentProjectUserId(res.userId);
    setPageJson(res.json);
  });
  if (isError) return <PageNotFound />;
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
