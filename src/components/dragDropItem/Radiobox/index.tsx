import React from "react";
import { useNode } from "@craftjs/core";
import { Form, Radio, Space } from "antd";
import { USER_COMPONENT_NAME } from "../../../app/constants/userComponentName";
import RadioboxConfig from "./RadioboxConfig";

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

export const Radiobox = (props: Props) => {
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
            {listOption?.map((item, index) => (
              <Radio key={index}>{item}</Radio>
            ))}
          </Space>
        </div>
      </Form.Item>
    </div>
  );
};

Radiobox.defaultProps = defaultProps;

Radiobox.craft = {
  displayName: USER_COMPONENT_NAME.RADIOBOX,
  props: defaultProps,
  related: {
    settings: RadioboxConfig,
  },
};
