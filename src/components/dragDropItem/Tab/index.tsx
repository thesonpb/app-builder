import React from "react";
import { Tabs } from "antd";
import { Element, useNode } from "@craftjs/core";
import { USER_COMPONENT_NAME } from "../../../app/constants/userComponentName";
import { Container } from "../../dragDropContainer";
import { TabConfig } from "./TabConfig";

interface Props {
  tabs: string[];
  children?: React.ReactNode;
}

const defaultProps = {
  tabs: ["Tab 1", "Tab 2"],
};

export const Tab = (props: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { tabs, children } = props;

  return (
    <div ref={(ref: any) => connect(drag(ref))}>
      <Tabs>
        {tabs.map((tab, index) => (
          <Tabs.TabPane tab={tab} key={index}>
            <Element is={Container} canvas id={index.toString()}>
              {children}
            </Element>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
};

Tab.defaultProps = defaultProps;

Tab.craft = {
  displayName: USER_COMPONENT_NAME.TAB,
  props: defaultProps,
  related: {
    settings: TabConfig,
  },
};
