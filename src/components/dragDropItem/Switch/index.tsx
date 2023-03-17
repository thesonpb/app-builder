import React from "react";
import { Switch as AntSwitch } from "antd";
import { useNode } from "@craftjs/core";
import { USER_COMPONENT_NAME } from "../../../app/constants/userComponentName";
import SwitchConfig from "./SwitchConfig";
import { SwitchSize } from "antd/es/switch";

interface Props {
  label: string;
  showLabel: boolean;
  isVertical: boolean;
  defaultValue: boolean;
  isDisable: boolean;
  size: SwitchSize;
}

const defaultProps = {
  label: "Label",
  showLabel: true,
  isVertical: false,
  defaultValue: false,
  isDisable: false,
  size: "default",
};

export const Switch = (props: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { label, showLabel, isVertical, defaultValue, isDisable, size } = props;

  return (
    <div
      ref={(ref: any) => connect(drag(ref))}
      className={!isVertical ? "flex item-center gap-x-2" : ""}
    >
      {showLabel && <div>{label}</div>}
      <AntSwitch
        defaultChecked={defaultValue}
        disabled={isDisable}
        size={size}
      />
    </div>
  );
};

Switch.defaultProps = defaultProps;

Switch.craft = {
  displayName: USER_COMPONENT_NAME.SWITCH,
  props: defaultProps,
  related: {
    settings: SwitchConfig,
  },
};
