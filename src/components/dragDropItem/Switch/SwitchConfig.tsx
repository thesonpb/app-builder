import React from "react";
import { useNode } from "@craftjs/core";
import ComponentConfigTemplate from "../../display/ComponentConfigTemplate";
import { Switch, Select, Input } from "antd";
import { SwitchSize } from "antd/es/switch";

interface Props {
  label: string;
  showLabel: boolean;
  isVertical: boolean;
  defaultValue: boolean;
  isDisable: boolean;
  size: SwitchSize;
}

const SwitchConfig = () => {
  const {
    actions: { setProp },
    label,
    showLabel,
    isVertical,
    defaultValue,
    isDisable,
    size,
  } = useNode((node) => ({
    label: node.data.props.label,
    showLabel: node.data.props.showLabel,
    isVertical: node.data.props.isVertical,
    defaultValue: node.data.props.defaultValue,
    isDisable: node.data.props.isDisable,
    size: node.data.props.size,
  }));

  return (
    <div className="flex flex-col gap-y-4 pb-20">
      <ComponentConfigTemplate configName="General">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Default Value</div>
          <Switch
            defaultChecked={defaultValue}
            onChange={(value) =>
              setProp((props: Props) => (props.defaultValue = value))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Disabled</div>
          <Switch
            defaultChecked={isDisable}
            onChange={(value) =>
              setProp((props: Props) => (props.isDisable = value))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/3">Size</div>
          <Select
            className="w-2/3"
            defaultValue={size}
            options={[
              { value: "small", label: "Small" },
              { value: "default", label: "Default" },
              { value: "large", label: "Large" },
            ]}
            onChange={(value) =>
              setProp((props: Props) => (props.size = value))
            }
          />
        </div>
      </ComponentConfigTemplate>
      <ComponentConfigTemplate configName="Label">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Show Label</div>
          <Switch
            defaultChecked={showLabel}
            onChange={(value) =>
              setProp((props: Props) => (props.showLabel = value))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <Input
            placeholder="Label"
            defaultValue={label}
            onChange={(e) =>
              setProp((props: Props) => (props.label = e.target.value))
            }
          />
        </div>
      </ComponentConfigTemplate>
      <ComponentConfigTemplate configName="Layout">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Vertical</div>
          <Switch
            defaultChecked={isVertical}
            onChange={(value) =>
              setProp((props: Props) => (props.isVertical = value))
            }
          />
        </div>
      </ComponentConfigTemplate>
    </div>
  );
};

export default SwitchConfig;
