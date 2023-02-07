import React from "react";
import { Button as AntButton } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { useNode } from "@craftjs/core";
import { USER_COMPONENT_NAME } from "../../../app/constants/userComponentName";
import ButtonConfig from "./ButtonConfig";
declare const ButtonTypes: [
  "primary",
  "link",
  "text",
  "ghost",
  "default",
  "dashed",
  undefined
];
declare type ButtonType = (typeof ButtonTypes)[number];

interface Props {
  size?: SizeType;
  type?: ButtonType;
  color?: string;
  text?: string;
  backgroundColor?: string;
}

const defaultProps = {
  size: "middle",
  type: "primary",
  color: "",
  text: "Button",
  backgroundColor: "",
};

export const Button = (props: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { size, type, color, text, backgroundColor } = props;

  return (
    <AntButton
      ref={(ref: any) => connect(drag(ref))}
      size={size}
      type={type}
      style={{ color, backgroundColor }}
    >
      {text}
    </AntButton>
  );
};

Button.defaultProps = defaultProps;

Button.craft = {
  displayName: USER_COMPONENT_NAME.BUTTON,
  props: defaultProps,
  related: {
    settings: ButtonConfig,
  },
};
