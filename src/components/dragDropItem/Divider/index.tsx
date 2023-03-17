import React from "react";
import { useNode } from "@craftjs/core";
import { Divider as AntDivider } from "antd";
import { USER_COMPONENT_NAME } from "../../../app/constants/userComponentName";
import DividerConfig from "./DividerConfig";

interface Props {
  direction?: "horizontal" | "vertical" | undefined;
  showText?: boolean;
  text?: string;
  align?: "center" | "left" | "right" | undefined;
}

const defaultProps = {
  direction: "horizontal",
  showText: false,
  text: "",
  align: undefined,
};

export const Divider = (props: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  const { direction, showText, text, align } = props;
  return (
    <div ref={(ref: any) => connect(drag(ref))}>
      <AntDivider type={direction} plain={showText} orientation={align}>
        {showText && text}
      </AntDivider>
    </div>
  );
};

Divider.defaultProps = defaultProps;

Divider.craft = {
  displayName: USER_COMPONENT_NAME.DIVIDER,
  props: defaultProps,
  related: {
    settings: DividerConfig,
  },
};
