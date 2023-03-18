import React from "react";
import { useNode } from "@craftjs/core";
import ComponentConfigTemplate from "../../display/ComponentConfigTemplate";
import { Input, Switch } from "antd";

function TagConfig() {
  const {
    actions: { setProp },
    text,
    color,
    closable, // added closable prop
  } = useNode((node: any) => ({
    text: node.data.props.text,
    color: node.data.props.color,
    closable: node.data.props.closable, // set closable prop from node data
  }));

  return (
    <div className="flex flex-col gap-y-4 pb-20">
      <ComponentConfigTemplate configName="General">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/3">Color</div>
          <input
            type="color"
            defaultValue={color}
            onChange={(e) =>
              setProp((props: any) => (props.color = e.target.value))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Closable</div>
          <Switch
            defaultChecked={closable} // set default checked value
            onChange={(value: boolean) =>
              setProp((props: any) => (props.closable = value))
            }
          />
        </div>
      </ComponentConfigTemplate>
      <ComponentConfigTemplate configName="Text">
        <div className="flex gap-x-2 items-center justify-between">
          <Input
            placeholder="Tag text"
            defaultValue={text}
            onChange={(e) =>
              setProp((props: any) => (props.text = e.target.value))
            }
          />
        </div>
      </ComponentConfigTemplate>
    </div>
  );
}

export default TagConfig;
