import React from "react";
import { useParams } from "react-router-dom";
import { Editor, Frame } from "@craftjs/core";
import { DragDropItem } from "../components/dragDropItem";
import { DragDropContainer } from "../components/dragDropContainer";
import PageNotFound from "./PageNotFound";
import { TEMPLATES } from "../app/constants/templates";
import TemplateNotFound from "./TemplateNotFound";

function TemplateView() {
  const { name } = useParams();
  const template = TEMPLATES[name || ""];

  return template?.id ? (
    <div>
      <Editor
        resolver={{ ...DragDropItem, ...DragDropContainer }}
        enabled={false}
      >
        <Frame data={template.json} />
      </Editor>
    </div>
  ) : (
    <TemplateNotFound />
  );
}

export default TemplateView;
