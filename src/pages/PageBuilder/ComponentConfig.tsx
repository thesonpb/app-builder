import { Layout } from "antd";
import React, { useContext } from "react";
import { PageBuilderContext } from "../../app/context/PageBuilderContext";
import { useEditor } from "@craftjs/core";
const { Sider } = Layout;

export default function ComponentConfig() {
  const { isPreviewEditor } = useContext(PageBuilderContext);
  const { selected } = useEditor((state: any) => {
    const [currentNodeId] = state.events.selected;
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
      };
    }
    return {
      selected,
    };
  });
  return (
    <Sider
      collapsedWidth={0}
      trigger={null}
      collapsible
      collapsed={isPreviewEditor}
      className={`small-scroll-bar overflow-auto fixed right-0 top-16 h-screen ${
        !isPreviewEditor && "px-4"
      } text-light`}
      style={{
        backgroundColor: "#343a40",
      }}
      width={240}
    >
      {selected && (
        <>
          <h3 className="uppercase my-4">{selected.name}</h3>
          {selected.settings && React.createElement(selected.settings)}
        </>
      )}
    </Sider>
  );
}
