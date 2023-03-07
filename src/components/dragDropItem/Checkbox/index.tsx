import React from "react";
import { useNode } from "@craftjs/core";
import { Checkbox as AntCheckbox, Form, Space } from "antd";
import { USER_COMPONENT_NAME } from "../../../app/constants/userComponentName";
import CheckboxConfig from "./CheckboxConfig";

interface Props {
  title?: string;
  listOption?: string[];
  isVertical?: boolean;
  showTitle?: boolean;
}

const defaultProps = {
  isVertical: true,
  listOption: ["Option 1", "Options 2"],
  title: "Title",
  showTitle: true,
};

export const Checkbox = (props: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { isVertical, listOption, title, showTitle } = props;
  return (
    <div ref={(ref: any) => connect(drag(ref))}>
      <Form.Item>
        <div>
          {showTitle && <label className="mr-4 font-bold">{title}</label>}
          <Space direction={isVertical ? "vertical" : "horizontal"}>
            {listOption?.map((item) => (
              <AntCheckbox>{item}</AntCheckbox>
            ))}
          </Space>
        </div>
      </Form.Item>
    </div>
  );
};

Checkbox.defaultProps = defaultProps;

Checkbox.craft = {
  displayName: USER_COMPONENT_NAME.CHECKBOX,
  props: defaultProps,
  related: {
    settings: CheckboxConfig,
  },
};
