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
  minHeight?: string;
  minWidth?: string;
  maxWidth?: string;
  maxHeight?: string;
  className?: string;
}

export const Container = ({
  className = "",
  backgroundColor = "#e9ecef",
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  height,
  minHeight = "10rem",
  minWidth,
  width,
  borderColor = "#5c6b73",
  borderStyle = "solid",
  borderWidth = "1px",
  children,
  marginBottom = "0",
  marginLeft,
  marginRight,
  marginTop = "0",
  paddingBottom = "0",
  paddingLeft = "0",
  paddingRight = "0",
  paddingTop = "0",
}: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      ref={(ref: any) => connect(drag(ref))}
      className={className}
      style={{
        backgroundColor,
        borderBottomLeftRadius,
        borderBottomRightRadius,
        borderRadius,
        borderTopLeftRadius,
        borderTopRightRadius,
        height,
        minHeight,
        minWidth,
        width,
        borderColor,
        borderStyle,
        borderWidth,
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
