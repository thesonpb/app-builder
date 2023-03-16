import React from "react";
import ComponentConfigTemplate from "../../display/ComponentConfigTemplate";
import { Input } from "antd";
import { useNode } from "@craftjs/core";

function StatisticConfig() {
  const {
    actions: { setProp },
    title,
    value,
  } = useNode((node) => ({
    title: node.data.props.title,
    value: node.data.props.value,
  }));

  return (
    <div className="flex flex-col gap-y-4 pb-20">
      <ComponentConfigTemplate configName="Title">
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
      <ComponentConfigTemplate configName="Value">
        <div className="flex gap-x-2 items-center justify-between">
          <Input
            placeholder="Value"
            defaultValue={value}
            onChange={(e) =>
              setProp((props: any) => (props.value = Number(e.target.value)))
            }
          />
        </div>
      </ComponentConfigTemplate>
    </div>
  );
}

export default StatisticConfig;
