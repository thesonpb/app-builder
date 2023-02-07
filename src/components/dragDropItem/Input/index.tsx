import React from "react";
import { Form, Input as InputAntd } from "antd";
import { useNode } from "@craftjs/core";
import { USER_COMPONENT_NAME } from "../../../app/constants/userComponentName";
import InputConfig from "./InputConfig";

interface Props {
  placeholder?: string;
  label?: string;
  showLabel?: boolean;
  isVertical?: boolean;
  showPlaceHolder?: boolean;
  color?: string;
  isPassword?: boolean;
}

const defaultProps = {
  placeholder: "Place holder",
  isVertical: true,
  showPlaceHolder: true,
  label: "Label",
  showLabel: true,
  color: "black",
  isPassword: false,
};

export const Input = (props: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const {
    isVertical,
    showLabel,
    label,
    showPlaceHolder,
    placeholder,
    color,
    isPassword,
  } = props;
  return (
    <div ref={(ref: any) => connect(drag(ref))}>
      <Form.Item>
        <div className={isVertical ? "" : "flex items-center"}>
          {showLabel && (
            <label className="mr-4 font-bold" style={{ color }}>
              {label}:
            </label>
          )}
          {isPassword ? (
            <InputAntd.Password
              placeholder={showPlaceHolder ? placeholder : ""}
            />
          ) : (
            <InputAntd placeholder={showPlaceHolder ? placeholder : ""} />
          )}
        </div>
      </Form.Item>
    </div>
  );
};

Input.defaultProps = defaultProps;

Input.craft = {
  displayName: USER_COMPONENT_NAME.INPUT,
  props: defaultProps,
  related: {
    settings: InputConfig,
  },
};
