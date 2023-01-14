import React from "react";
import { useNode } from "@craftjs/core";

interface Props {
  text?: string;
  fontSize?: number;
  isBold?: boolean;
  isItalic?: boolean;
  isUnderline?: boolean;
}

export const Paragraph = ({
  text = "Paragraph",
  fontSize,
  isBold,
  isItalic,
  isUnderline,
}: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <p
      ref={(ref: any) => connect(drag(ref))}
      className={`m-0 ${isBold ? "font-bold" : ""} ${
        isItalic ? "italic" : ""
      } ${isUnderline ? "underline" : ""} `}
      style={{ fontSize }}
    >
      {text}
    </p>
  );
};
