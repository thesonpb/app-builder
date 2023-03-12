import React from "react";
import { Image as AntImage } from "antd";
import { useNode } from "@craftjs/core";
import { USER_COMPONENT_NAME } from "../../../app/constants/userComponentName";
import ImageConfig from "./ImageConfig";

interface Props {
  src?: string;
  width?: number;
}

const defaultProps = {
  src: "https://picsum.photos/200",
  width: 200,
};

export const Image = (props: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { src, width } = props;

  return (
    <div ref={(ref: any) => connect(drag(ref))}>
      <AntImage width={width} src={src} />
    </div>
  );
};

Image.defaultProps = defaultProps;

Image.craft = {
  displayName: USER_COMPONENT_NAME.IMAGE,
  props: defaultProps,
  related: {
    settings: ImageConfig,
  },
};
