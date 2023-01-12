import React from "react";
import { Template } from "../../app/models/interface";

interface Props {
  type: string;
  selectedTemplate: number;
  setSelectedTemplate: Function;
}
function TemplatePreview({
  type,
  selectedTemplate,
  setSelectedTemplate,
}: Props) {
  //TODO: dùng type gọi api lấy template của page/app
  const renderTemplate = (template: Template) => (
    <div
      key={template.id}
      className={`cursor-pointer p-2 border-solid border border-border ${
        selectedTemplate === template.id ? "bg-amber-300" : ""
      } rounded-xl`}
      onClick={() => setSelectedTemplate(template.id)}
    >
      <div className="bg-blue-300 h-32 rounded-xl"></div>
      <h3 className="m-0 text-center">Template name</h3>
    </div>
  );
  return (
    <div className="grid grid-cols-3 gap-4 overflow-auto h-80">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) =>
        renderTemplate({
          id: item,
          name: "dfdfd",
          image: "adkfjf",
        })
      )}
    </div>
  );
}

export default TemplatePreview;
