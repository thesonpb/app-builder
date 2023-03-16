import React from "react";
import { useNode } from "@craftjs/core";
import ComponentConfigTemplate from "../../display/ComponentConfigTemplate";
import { Button, Input } from "antd";

interface TabConfigProps {
  tabs: { title: string; id: string }[];
  setTabs: React.Dispatch<
    React.SetStateAction<{ title: string; id: string }[]>
  >;
}

export const TabConfig = (props: TabConfigProps) => {
  const {
    actions: { setProp },
    tabs,
  } = useNode((node) => ({
    tabs: node.data.props.tabs,
  }));

  const handleTabTitleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newTabs = [...tabs];
    newTabs[index] = event.target.value;
    setProp((props: any) => (props.tabs = newTabs));
  };

  const addTab = () => {
    setProp((props: any) => (props.tabs = [...tabs, `Tab ${tabs.length + 1}`]));
  };

  const removeTab = (index: number) => {
    const newTabs = [...tabs];
    newTabs.splice(index, 1);
    setProp((props: any) => (props.tabs = newTabs));
  };

  return (
    <div className="flex flex-col gap-y-4 pb-20">
      <ComponentConfigTemplate configName="Tabs">
        {tabs.map((tab: string, index: number) => (
          <div
            key={index}
            className="flex gap-x-2 items-center justify-between"
          >
            <Input
              placeholder="Tab title"
              defaultValue={tab}
              onChange={(e) => handleTabTitleChange(index, e)}
            />
            <Button danger type="primary" onClick={() => removeTab(index)}>
              Remove
            </Button>
          </div>
        ))}
        <Button type="primary" onClick={addTab}>
          Add
        </Button>
      </ComponentConfigTemplate>
    </div>
  );
};
