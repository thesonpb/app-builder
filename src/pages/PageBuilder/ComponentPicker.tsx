import React from "react";
import { Layout, Tabs, TabsProps } from "antd";
import ComponentList from "./ComponentList";
const { Sider } = Layout;

const items: TabsProps["items"] = [
  {
    key: "1",
    label: `Basic`,
    children: <ComponentList type={1} />,
  },
  // {
  //   key: "2",
  //   label: `My components`,
  //   children: `Content of Tab Pane 2`,
  // },
  {
    key: "3",
    label: `Community`,
    children: <ComponentList type={3} />,
  },
];
function ComponentPicker() {
  return (
    <Sider
      className="overflow-auto fixed top-16 h-screen px-4 text-light"
      style={{
        borderRight: "1px solid #525866",
        backgroundColor: "#343a40",
      }}
      width={320}
    >
      <Tabs defaultActiveKey="1" items={items} />
    </Sider>
  );
}

export default ComponentPicker;
