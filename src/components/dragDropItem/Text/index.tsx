import React from "react";
import { useEditor, useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import { USER_COMPONENT_NAME } from "../../../app/constants/userComponentName";
import TextConfig from "./TextConfig";

interface Props {
  text?: string;
  fontSize?: number;
  isBold?: boolean;
  isItalic?: boolean;
  isUnderline?: boolean;
  textAlign?: string;
  color?: string;
}

const defaultProps = {
  text: "Text",
  fontSize: 16,
  isBold: false,
  isItalic: false,
  isUnderline: false,
  textAlign: "left",
  color: "black",
};

export const Text = (props: Props) => {
  const {
    connectors: { connect },
    actions: { setProp },
  } = useNode();
  const { enabled } = useEditor((state: any) => ({
    enabled: state.options.enabled,
  }));

  const { text, fontSize, isBold, isItalic, isUnderline, textAlign, color } =
    props;

  return (
    <ContentEditable
      innerRef={connect}
      html={text || ""}
      disabled={!enabled}
      onChange={(e) => {
        setProp((prop: any) => (prop.text = e.target.value), 500);
      }}
      tagName="div"
      className={`mt-4 mb-0 ${isBold ? "font-bold" : ""} ${
        isItalic ? "italic" : ""
      } ${isUnderline ? "underline" : ""} `}
      style={{ fontSize, textAlign, color }}
    />
  );
};

Text.defaultProps = defaultProps;

Text.craft = {
  displayName: USER_COMPONENT_NAME.TEXT,
  props: defaultProps,
  related: {
    settings: TextConfig,
  },
};
