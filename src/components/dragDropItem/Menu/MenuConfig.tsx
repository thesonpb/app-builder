import React from "react";
import { useNode } from "@craftjs/core";
import ComponentConfigTemplate from "../../display/ComponentConfigTemplate";
import { Input, MenuProps, Select } from "antd";

function MenuConfig() {
  const {
    actions: { setProp },
    direction,
    items,
  } = useNode((node) => ({
    direction: node.data.props.direction,
    items: node.data.props.items,
  }));

  const directionOptions = [
    { value: "vertical", label: "Vertical" },
    { value: "horizontal", label: "Horizontal" },
  ];

  const userItems: MenuProps["items"] = [
    {
      label: (
        <div className="text-sm font-semibold text-white">
          Separate values with ';'
        </div>
      ),
      key: "note",
    },
  ];

  return (
    <div className="flex flex-col gap-y-4 pb-20">
      <ComponentConfigTemplate configName="General">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/3">Direction</div>
          <Select
            className="w-2/3"
            defaultValue={direction}
            options={directionOptions}
            onChange={(value) =>
              setProp((props: any) => (props.direction = value))
            }
          />
        </div>
      </ComponentConfigTemplate>
      <ComponentConfigTemplate configName="Items" showInfo content={userItems}>
        <div className="flex gap-x-2 items-center justify-between">
          <Input
            placeholder="Items"
            defaultValue={items?.join("; ")}
            onChange={(e) =>
              setProp(
                (props: any) => (props.items = e.target.value?.split("; "))
              )
            }
          />
        </div>
      </ComponentConfigTemplate>
    </div>
  );
}

export default MenuConfig;
