import React, { useContext } from "react";
import { PageBuilderContext } from "../../app/context/PageBuilderContext";
import ComponentConfig from "./ComponentConfig";
import ComponentPicker from "./ComponentPicker";
import EditorPage from "./EditorPage";
import PreviewPage from "./PreviewPage";
import { Editor } from "@craftjs/core";
import { DragDropItem } from "../../components/dragDropItem";
import { DragDropContainer } from "../../components/dragDropContainer";

function PageBuilder() {
  const { isPreviewEditor } = useContext(PageBuilderContext);
  return (
    <>
      <div className="flex ">
        <Editor resolver={{ ...DragDropItem, ...DragDropContainer }}>
          <ComponentPicker />
          {!isPreviewEditor ? <EditorPage /> : <PreviewPage />}
          <ComponentConfig />
        </Editor>
      </div>
    </>
  );
}

export default PageBuilder;
