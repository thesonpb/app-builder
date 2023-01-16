import React from "react";
import { useNode } from "@craftjs/core";
import { USER_COMPONENT_NAME } from "../../../app/constants/userComponentName";
import ContainerConfig from "./ContainerConfig";

interface Props {
  backgroundColor?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  borderBottomLeftRadius?: string;
  borderBottomRightRadius?: string;
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
  children?: React.ReactNode;
  padding?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  margin?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
  minHeight?: string;
  minWidth?: string;
  maxWidth?: string;
  maxHeight?: string;
  className?: string;
}

const defaultProps = {
  backgroundColor: "white",
  minHeight: "10rem",
  padding: "1rem",
  borderRadius: "1rem",
  borderColor: "#f2f2f2",
  borderStyle: "solid",
  borderWidth: "1px",
  marginTop: "1rem",
};

export const Container = (props: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  props = { ...defaultProps, ...props };
  const { className, children } = props;
  return (
    <div
      ref={(ref: any) => connect(drag(ref))}
      style={{
        ...props,
      }}
      className={className}
    >
      {children}
    </div>
  );
};
Container.craft = {
  displayName: USER_COMPONENT_NAME.CONTAINER,
  props: defaultProps,
  related: {
    settings: ContainerConfig,
  },
};
