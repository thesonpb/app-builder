import React from "react";
import { useEditor, useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";

interface Props {
  text?: string;
  fontSize?: number;
  isBold?: boolean;
  isItalic?: boolean;
  isUnderline?: boolean;
}

export const Text = (props: Props) => {
  const {
    connectors: { connect },
    setProp,
  } = useNode();
  const { enabled } = useEditor((state: any) => ({
    enabled: state.options.enabled,
  }));

  const { text = "Text", isBold, isItalic, isUnderline } = props;

  return (
    <ContentEditable
      innerRef={connect}
      html={text}
      disabled={!enabled}
      onChange={(e) => {
        setProp((prop) => (prop.text = e.target.value), 500);
      }}
      tagName="h2"
      className={`mt-4 mb-0 ${isBold ? "font-bold" : ""} ${
        isItalic ? "italic" : ""
      } ${isUnderline ? "underline" : ""} `}
      style={{ ...props }}
    />
  );
};
