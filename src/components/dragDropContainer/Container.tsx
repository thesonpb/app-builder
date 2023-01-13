import React from "react";
import { useNode } from "@craftjs/core";

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
}

export const Container = ({
  backgroundColor,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  height,
  width,
  borderColor,
  borderStyle,
  borderWidth,
  children,
  padding,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
}: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      ref={(ref: any) => connect(drag(ref))}
      style={{
        backgroundColor,
        borderBottomLeftRadius,
        borderBottomRightRadius,
        borderRadius,
        borderTopLeftRadius,
        borderTopRightRadius,
        height,
        width,
        borderColor,
        borderStyle,
        borderWidth,
        padding,
        margin,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop,
      }}
    >
      {children}
    </div>
  );
};
