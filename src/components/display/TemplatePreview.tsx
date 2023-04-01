import React from "react";
import { TEMPLATES } from "../../app/constants/templates";

interface Props {
  selectedTemplate: string;
  setSelectedTemplate: Function;
}
function TemplatePreview({ selectedTemplate, setSelectedTemplate }: Props) {
  const renderTemplate = ({ item }: any) => (
    <div
      key={item.id}
      className={`cursor-pointer p-2 border-solid border border-border ${
        selectedTemplate === item.name ? "bg-lightGray" : ""
      } rounded-xl`}
      onClick={() => setSelectedTemplate(item.name)}
    >
      <img
        src={`/images/${item.coverImage}`}
        alt={item.displayName}
        className="object-center object-cover h-28 rounded-xl"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
      <h3 className="m-0 text-center">{item.displayName}</h3>
    </div>
  );
  return (
    <div className="grid grid-cols-3 gap-4 overflow-auto small-scroll-bar h-80">
      {Object.keys(TEMPLATES).map((item) =>
        renderTemplate({
          item: TEMPLATES[item],
        })
      )}
    </div>
  );
}

export default TemplatePreview;
