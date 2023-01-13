import React from "react";
import { useNode } from "@craftjs/core";

interface Props {
  text: string;
  fontSize?: number;
  isBold?: boolean;
  isItalic?: boolean;
  isUnderline?: boolean;
  inlineBlock?: boolean;
  block?: boolean;
}

export const Text = ({
  text,
  fontSize,
  isBold,
  isItalic,
  isUnderline,
  inlineBlock,
  block,
}: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div ref={(ref: any) => connect(drag(ref))}>
      <p
        className={`${isBold ? "font-bold" : ""} ${isItalic ? "italic" : ""} ${
          isUnderline ? "underline" : ""
        } ${inlineBlock ? "inline-block " : ""} ${block ? "block" : ""}`}
        style={{ fontSize }}
      >
        {text}
      </p>
    </div>
  );
};
