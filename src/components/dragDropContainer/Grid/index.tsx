import React from "react";
import { useNode } from "@craftjs/core";
import { USER_COMPONENT_NAME } from "../../../app/constants/userComponentName";
import GridConfig from "./GridConfig";

interface Props {
  isCol?: boolean;
  numCols?: string;
  numRows?: string;
  backgroundColor?: string;
  gap?: string;
  gapX?: string;
  gapY?: string;
  children: React.ReactNode;
  margin?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
  padding?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  borderRadius?: string;
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
  borderBottomLeftRadius?: string;
  borderBottomRightRadius?: string;
  height?: string;
  width?: string;
  minHeight?: string;
  minWidth?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
  maxWidth?: string;
  maxHeight?: string;
  className?: string;
  showBorder?: boolean;
}

const defaultProps = {
  gap: "0",
  isCol: true,
  numCols: "2",
  numRows: "2",
  gapX: "0",
  gapY: "0",
  minHeight: "10rem",
  borderRadius: "16px",
  borderColor: "#f2f2f2",
  borderStyle: "solid",
  borderWidth: "1px",
  marginTop: "1rem",
  padding: "16px",
  backgroundColor: "white",
  showBorder: true,
  children: undefined,
};

export const Grid = (props: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  const {
    isCol,
    numCols,
    numRows,
    gapX,
    gapY,
    children,
    showBorder,
    padding,
    margin,
    borderRadius,
    paddingTop,
    paddingRight,
    paddingLeft,
    paddingBottom,
    marginTop,
    marginRight,
    marginLeft,
    marginBottom,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderWidth,
  } = props;

  const layout = isCol
    ? {
        gridTemplateColumns: `repeat(${numCols}, minmax(0, 1fr))`,
      }
    : {
        gridTemplateRows: `repeat(${numRows}, minmax(0, 1fr))`,
        gridAutoFlow: "column",
      };
  return (
    <div
      ref={(ref: any) => connect(drag(ref))}
      className="grid"
      style={{
        ...props,
        ...layout,
        columnGap: `${gapX}px`,
        rowGap: `${gapY}px`,
        padding: `${padding}px`,
        paddingTop: `${paddingTop}px`,
        paddingBottom: `${paddingBottom}px`,
        paddingLeft: `${paddingLeft}px`,
        paddingRight: `${paddingRight}px`,
        margin: `${margin}px`,
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
        marginLeft: `${marginLeft}px`,
        marginRight: `${marginRight}px`,
        borderRadius: `${borderRadius}px`,
        borderTopLeftRadius: `${borderTopLeftRadius}px`,
        borderTopRightRadius: `${borderTopRightRadius}px`,
        borderBottomLeftRadius: `${borderBottomLeftRadius}px`,
        borderBottomRightRadius: `${borderBottomRightRadius}px`,
        borderWidth: showBorder ? `${borderWidth}px` : "0",
      }}
    >
      {children}
    </div>
  );
};

Grid.defaultProps = defaultProps;

Grid.craft = {
  displayName: USER_COMPONENT_NAME.GRID,
  props: defaultProps,
  related: {
    settings: GridConfig,
  },
};
