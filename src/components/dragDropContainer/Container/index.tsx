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
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
  minHeight?: string;
  minWidth?: string;
  className?: string;
}

export const Container = ({
  className = "",
  backgroundColor = "white",
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  height,
  minHeight = "10rem",
  minWidth,
  width,
  borderColor = "black",
  borderStyle = "solid",
  borderWidth = "1px",
  children,
  marginBottom = "0.5rem",
  marginLeft,
  marginRight,
  marginTop = "0.5rem",
  paddingBottom = "1rem",
  paddingLeft = "1rem",
  paddingRight = "1rem",
  paddingTop = "1rem",
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
