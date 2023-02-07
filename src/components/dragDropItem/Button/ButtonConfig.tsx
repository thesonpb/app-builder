import React from "react";
import { useNode } from "@craftjs/core";
import ComponentConfigTemplate from "../../display/ComponentConfigTemplate";
import { Input, Select } from "antd";

function ButtonConfig() {
  const {
    actions: { setProp },
    size,
    type,
    color,
    text,
    backgroundColor,
  } = useNode((node: any) => ({
    size: node.data.props.size,
    type: node.data.props.type,
    color: node.data.props.color,
    text: node.data.props.text,
    backgroundColor: node.data.props.backgroundColor,
  }));

  return (
    <div className="flex flex-col gap-y-4 pb-20">
      <ComponentConfigTemplate configName="General">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Size</div>
          <Select
            className="w-1/2"
            defaultValue={size}
            options={[
              { value: "small", label: "Small" },
              { value: "middle", label: "Middle" },
              { value: "large", label: "Large" },
            ]}
            onChange={(value) => setProp((props: any) => (props.size = value))}
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Type</div>
          <Select
            className="w-1/2"
            defaultValue={type}
            options={[
              { value: "default", label: "Default" },
              { value: "primary", label: "Primary" },
              { value: "link", label: "Link" },
              { value: "text", label: "Text" },
              { value: "ghost", label: "Ghost" },
              { value: "dashed", label: "Dashed" },
            ]}
            onChange={(value) => {
              setProp((props: any) => (props.type = value));
              setProp((props: any) => (props.color = ""));
              setProp((props: any) => (props.backgroundColor = ""));
            }}
          />
        </div>
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
          <div className="w-1/3">Background color</div>
          <input
            type="color"
            defaultValue={backgroundColor}
            onChange={(e) =>
              setProp((props: any) => (props.backgroundColor = e.target.value))
            }
          />
        </div>
      </ComponentConfigTemplate>
      <ComponentConfigTemplate configName="Text">
        <div className="flex gap-x-2 items-center justify-between">
          <Input
            placeholder="Label"
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

export default ButtonConfig;
