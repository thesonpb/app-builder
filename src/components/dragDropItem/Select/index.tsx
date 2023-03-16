import React from "react";
import { Form, Select as AntSelect } from "antd";
import { useNode } from "@craftjs/core";
import { USER_COMPONENT_NAME } from "../../../app/constants/userComponentName";
import SelectConfig from "./SelectConfig";

interface Props {
  placeholder?: string;
  label?: string;
  showLabel?: boolean;
  isVertical?: boolean;
  showPlaceHolder?: boolean;
  color?: string;
  showSearch?: boolean;
  items?: string[];
}

const defaultProps = {
  placeholder: "Place holder",
  isVertical: true,
  showPlaceHolder: true,
  label: "Label",
  showLabel: true,
  color: "black",
  showSearch: false,
  items: ["Item 1", "Item 2", "Item 3"],
};

export const Select = (props: Props) => {
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
    showSearch,
    items,
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
          <AntSelect
            placeholder={showPlaceHolder ? placeholder : ""}
            showSearch={showSearch}
          >
            {items?.map((value) => (
              <AntSelect.Option key={value} value={value}>
                {value}
              </AntSelect.Option>
            ))}
          </AntSelect>
        </div>
      </Form.Item>
    </div>
  );
};

Select.defaultProps = defaultProps;

Select.craft = {
  displayName: USER_COMPONENT_NAME.SELECT,
  props: defaultProps,
  related: {
    settings: SelectConfig,
  },
};
