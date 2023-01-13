import React from "react";
import { Button as AntButton } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { useNode } from "@craftjs/core";
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
  children?: React.ReactNode;
}

export const Button = ({ size, type, color, children }: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <AntButton
      ref={(ref: any) => connect(drag(ref))}
      size={size}
      type={type}
      color={color}
    >
      {children}
    </AntButton>
  );
};
