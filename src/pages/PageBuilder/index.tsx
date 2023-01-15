import React, { useContext } from "react";
import { PageBuilderContext } from "../../app/context/PageBuilderContext";
import ComponentConfig from "./ComponentConfig";
import ComponentPicker from "./ComponentPicker";
import EditorPage from "./EditorPage";
import { Editor } from "@craftjs/core";
import { DragDropItem } from "../../components/dragDropItem";
import { DragDropContainer } from "../../components/dragDropContainer";
import { RenderNode } from "../../components/editor/RenderNode";

function PageBuilder() {
  const { isPreviewEditor } = useContext(PageBuilderContext);
  return (
    <>
      <div className="flex">
        <Editor
          enabled={!isPreviewEditor}
          resolver={{ ...DragDropItem, ...DragDropContainer }}
          onRender={RenderNode}
        >
          <ComponentPicker />
          <EditorPage />
          <ComponentConfig />
        </Editor>
      </div>
    </>
  );
}

export default PageBuilder;
