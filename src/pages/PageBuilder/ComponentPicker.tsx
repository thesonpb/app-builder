import { Layout } from "antd";
import ComponentList from "./ComponentList";
import { useContext } from "react";
import { PageBuilderContext } from "../../app/context/PageBuilderContext";

const { Sider } = Layout;

// const items: TabsProps["items"] = [
//     {
//         key: "1",
//         label: `Basic`,
//         children: <ComponentList type={1} />,
//     },
//     // {
//     //   key: "2",
//     //   label: `My components`,
//     //   children: `Content of Tab Pane 2`,
//     // },
//     {
//         key: "3",
//         label: `Community`,
//         children: <ComponentList type={3} />,
//     },
// ];
function ComponentPicker() {
  const { isPreviewEditor } = useContext(PageBuilderContext);
  return (
    <Sider
      collapsedWidth={0}
      trigger={null}
      collapsible
      collapsed={isPreviewEditor}
      className={`small-scroll-bar overflow-auto fixed top-16 h-screen ${
        !isPreviewEditor && "px-4"
      } text-light`}
      style={{
        borderRight: "1px solid #525866",
        backgroundColor: "#343a40",
      }}
      width={240}
    >
      {/* <Tabs defaultActiveKey="1" items={items} /> */}
      <ComponentList type={1} />
    </Sider>
  );
}

export default ComponentPicker;
