import React from "react";
import { useNode } from "@craftjs/core";
import ComponentConfigTemplate from "../../display/ComponentConfigTemplate";
import { Input, Select } from "antd";

function ContainerConfig() {
  const {
    actions: { setProp },
    backgroundColor,
    padding,
    margin,
    borderRadius,
    borderStyle,
    borderWidth,
    borderColor,
  } = useNode((node: any) => ({
    backgroundColor: node.data.props.backgroundColor,
    padding: node.data.props.padding,
    margin: node.data.props.margin,
    borderRadius: node.data.props.borderRadius,
    borderStyle: node.data.props.borderStyle,
    borderWidth: node.data.props.borderWidth,
    borderColor: node.data.props.borderColor,
  }));

  return (
    <div className="flex flex-col gap-y-4 pb-20">
      <ComponentConfigTemplate configName="General">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Background Color</div>
          <input
            className="w-1/2"
            type="color"
            defaultValue={backgroundColor}
            onChange={(e) =>
              setProp((props: any) => (props.backgroundColor = e.target.value))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Padding</div>
          <Input
            className="w-1/2"
            defaultValue={
              (padding?.includes("px")
                ? padding.replace(/px/g, "")
                : padding) || 0
            }
            onChange={(e) =>
              setProp((props: any) => (props.padding = `${e.target.value}px`))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Margin</div>
          <Input
            className="w-1/2"
            defaultValue={
              (margin?.includes("px") ? margin.replace(/px/g, "") : margin) || 0
            }
            onChange={(e) =>
              setProp((props: any) => (props.margin = `${e.target.value}px`))
            }
          />
        </div>
      </ComponentConfigTemplate>
      <ComponentConfigTemplate configName="Border">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Border Width</div>
          <Input
            className="w-1/2"
            defaultValue={
              (borderWidth?.includes("px")
                ? borderWidth.replace(/px/g, "")
                : borderWidth) || 0
            }
            onChange={(e) =>
              setProp(
                (props: any) => (props.borderWidth = `${e.target.value}px`)
              )
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Border Style</div>
          <Select
            className="w-1/2"
            defaultValue={borderStyle}
            options={[
              { value: "none", label: "None" },
              { value: "solid", label: "Solid" },
              { value: "dotted", label: "Dotted" },
              { value: "dashed", label: "Dashed" },
              { value: "double", label: "Double" },
            ]}
            onChange={(value) =>
              setProp((props: any) => (props.borderStyle = value))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Border Color</div>
          <input
            className="w-1/2"
            type="color"
            defaultValue={borderColor}
            onChange={(e) =>
              setProp((props: any) => (props.borderColor = e.target.value))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Border Radius</div>
          <Input
            className="w-1/2"
            defaultValue={
              (borderRadius?.includes("px")
                ? borderRadius.replace(/px/g, "")
                : borderRadius) || 0
            }
            onChange={(e) =>
              setProp(
                (props: any) => (props.borderRadius = `${e.target.value}px`)
              )
            }
          />
        </div>
      </ComponentConfigTemplate>
    </div>
  );
}
export default ContainerConfig;
