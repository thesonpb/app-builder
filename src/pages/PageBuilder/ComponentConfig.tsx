import { Layout } from "antd";
import { useContext } from "react";
import { PageBuilderContext } from "../../app/context/PageBuilderContext";
const { Sider } = Layout;

export default function ComponentConfig() {
  const { isPreviewEditor } = useContext(PageBuilderContext);
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
        borderRight: "1px solid #525866",
        backgroundColor: "#343a40",
      }}
      width={240}
    >
      <div className="flex flex-col gap-y-4 pb-20">
        <div className="flex flex-col">
          <h4>Background</h4>
          <div className="w-full rounded-md text-sm font-semibold cursor-pointer h-8 flex items-center justify-center bg-lightGray">
            Background
          </div>
        </div>
      </div>
    </Sider>
  );
}
