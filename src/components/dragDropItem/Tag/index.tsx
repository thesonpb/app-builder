import React from "react";
import { Tag as TagAntd } from "antd";
import { useNode } from "@craftjs/core";
import { USER_COMPONENT_NAME } from "../../../app/constants/userComponentName";
import TagConfig from "./TagConfig";

interface Props {
  text?: string;
  color?: string;
  closable?: boolean;
}

const defaultProps = {
  text: "Tag",
  color: "#1A61AF",
  closable: true,
};

export const Tag = (props: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { text, color, closable } = props;

  return (
    <TagAntd
      ref={(ref: any) => connect(drag(ref))}
      className={`py-1 px-2 rounded-lg inline-flex items-center`}
      color={color}
      closable={closable}
    >
      <span className="text-xs">{text}</span>
    </TagAntd>
  );
};

Tag.defaultProps = defaultProps;

Tag.craft = {
  displayName: USER_COMPONENT_NAME.TAG,
  props: defaultProps,
  related: {
    settings: TagConfig,
  },
};
