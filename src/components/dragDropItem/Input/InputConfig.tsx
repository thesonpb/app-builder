import React from "react";
import { useNode } from "@craftjs/core";
import ComponentConfigTemplate from "../../display/ComponentConfigTemplate";
import { Input, Select, Switch } from "antd";

function InputConfig() {
  const {
    actions: { setProp },
    placeholder,
    isVertical,
    showPlaceHolder,
    label,
    showLabel,
    color,
    isPassword,
  } = useNode((node: any) => ({
    placeholder: node.data.props.placeholder,
    isVertical: node.data.props.isVertical,
    showPlaceHolder: node.data.props.showPlaceHolder,
    label: node.data.props.label,
    showLabel: node.data.props.showLabel,
    color: node.data.props.color,
    isPassword: node.data.props.isPassword,
  }));
  return (
    <div className="flex flex-col gap-y-4 pb-20">
      <ComponentConfigTemplate configName="General">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Password</div>
          <Switch
            defaultChecked={isPassword}
            onChange={(value) =>
              setProp((props: any) => (props.isPassword = value))
            }
          />
        </div>
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
      </ComponentConfigTemplate>
      <ComponentConfigTemplate configName="Label">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Label</div>
          <Switch
            defaultChecked={showLabel}
            onChange={(value) =>
              setProp((props: any) => (props.showLabel = value))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <Input
            placeholder="Label"
            defaultValue={label}
            onChange={(e) =>
              setProp((props: any) => (props.label = e.target.value))
            }
          />
        </div>
      </ComponentConfigTemplate>
      <ComponentConfigTemplate configName="Placeholder">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Placeholder</div>
          <Switch
            defaultChecked={showPlaceHolder}
            onChange={(value) =>
              setProp((props: any) => (props.showPlaceHolder = value))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <Input
            placeholder="Placeholder"
            defaultValue={placeholder}
            onChange={(e) =>
              setProp((props: any) => (props.placeholder = e.target.value))
            }
          />
        </div>
      </ComponentConfigTemplate>
    </div>
  );
}

export default InputConfig;
