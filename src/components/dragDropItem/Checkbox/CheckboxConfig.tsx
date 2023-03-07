import React from "react";
import { useNode } from "@craftjs/core";
import ComponentConfigTemplate from "../../display/ComponentConfigTemplate";
import { Input, MenuProps, Select, Switch } from "antd";

function CheckboxConfig() {
  const {
    actions: { setProp },
    title,
    isVertical,
    showTitle,
    listOption,
  } = useNode((node: any) => ({
    title: node.data.props.title,
    isVertical: node.data.props.isVertical,
    showTitle: node.data.props.showTitle,
    listOption: node.data.props.listOption,
  }));

  const userItems: MenuProps["items"] = [
    {
      label: (
        <div className="text-sm font-semibold text-white">
          Seperate values with ';'
        </div>
      ),
      key: "note",
    },
  ];
  return (
    <div className="flex flex-col gap-y-4 pb-20">
      <ComponentConfigTemplate configName="General">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/3">Layout</div>
          <Select
            className="w-2/3"
            defaultValue={isVertical ? "VERTICAL" : "HORIZONTAL"}
            options={[
              { value: "VERTICAL", label: "VERTICAL" },
              { value: "HORIZONTAL", label: "HORIZONTAL" },
            ]}
            onChange={(value) =>
              setProp((props: any) => (props.isVertical = value === "VERTICAL"))
            }
          />
        </div>
      </ComponentConfigTemplate>
      <ComponentConfigTemplate configName="Title">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Title</div>
          <Switch
            defaultChecked={showTitle}
            onChange={(value) =>
              setProp((props: any) => (props.showTitle = value))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <Input
            placeholder="Title"
            defaultValue={title}
            onChange={(e) =>
              setProp((props: any) => (props.title = e.target.value))
            }
          />
        </div>
      </ComponentConfigTemplate>
      <ComponentConfigTemplate
        configName="Options"
        showInfo
        content={userItems}
      >
        <div className="flex gap-x-2 items-center justify-between">
          <Input
            placeholder="Options"
            defaultValue={listOption?.join("; ")}
            onChange={(e) =>
              setProp(
                (props: any) => (props.listOption = e.target.value?.split("; "))
              )
            }
          />
        </div>
      </ComponentConfigTemplate>
    </div>
  );
}

export default CheckboxConfig;
