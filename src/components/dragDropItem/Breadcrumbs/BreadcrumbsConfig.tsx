import React from "react";
import { useNode } from "@craftjs/core";
import { Input, MenuProps } from "antd";
import ComponentConfigTemplate from "../../display/ComponentConfigTemplate";

function BreadcrumbsConfig() {
  const {
    actions: { setProp },
    listOption,
  } = useNode((node: any) => ({
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
      <ComponentConfigTemplate configName="Items" showInfo content={userItems}>
        <div className="flex gap-x-2 items-center justify-between">
          <Input
            placeholder="Items"
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

export default BreadcrumbsConfig;
