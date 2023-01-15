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
  borderLeftRadius?: string;
  borderRightRadius?: string;
  borderTopRadius?: string;
  borderBottomRadius?: string;
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
}

const defaultProps = {
  gap: "0",
  isCol: true,
  numCols: "2",
  numRows: "2",
  backgroundColor: "white",
  gapX: "0",
  gapY: "0",
  borderColor: "#5c6b73",
  borderStyle: "solid",
  borderWidth: "1px",
  minHeight: "10rem",
  padding: "1rem",
};

export const Grid = (props: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  props = { ...defaultProps, ...props };
  const { isCol, numCols, numRows, gapX, gapY, children } = props;

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
      className={`w-full grid`}
      style={{
        ...props,
        ...layout,
        columnGap: `${gapX}px`,
        rowGap: `${gapY}px`,
      }}
    >
      {children}
    </div>
  );
};

Grid.craft = {
  displayName: USER_COMPONENT_NAME.GRID,
  props: defaultProps,
  related: {
    settings: GridConfig,
  },
};
