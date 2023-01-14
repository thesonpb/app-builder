import React from "react";
import { useNode } from "@craftjs/core";

interface Props {
  numCols?: number;
  gap?: number;
  backgroundColor?: string;
  gapX?: number;
  gapY?: number;
  children: React.ReactNode;
}

export const Grid = ({
  numCols = 2,
  backgroundColor = "white",
  gapX = 4,
  gapY = 4,
  children,
}: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      ref={(ref: any) => connect(drag(ref))}
      className={`w-full grid grid-cols-${numCols} gap-x-${gapX} gap-y-${gapY}`}
      style={{ backgroundColor, minHeight: "5rem" }}
    >
      {children}
    </div>
  );
};
