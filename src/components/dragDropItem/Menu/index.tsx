import React from "react";
import { useNode } from "@craftjs/core";
import { USER_COMPONENT_NAME } from "../../../app/constants/userComponentName";
import MenuConfig from "./MenuConfig";
import { MenuProps } from "antd/lib";
import { Menu as AntMenu } from "antd";

interface Props {
  direction?: any;
  items?: any;
}

const defaultProps = {
  direction: "horizontal",
  items: ["Item 1", "Item 2", "Item 3"],
};

export const Menu = (props: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { direction, items } = props;
  const menuItems: MenuProps["items"] = items?.map((item: any) => ({
    value: item,
    label: item,
  }));
  return (
    <div ref={(ref: any) => connect(drag(ref))}>
      <AntMenu mode={direction} items={menuItems} />
    </div>
  );
};

Menu.defaultProps = defaultProps;

Menu.craft = {
  displayName: USER_COMPONENT_NAME.MENU,
  props: defaultProps,
  related: {
    settings: MenuConfig,
  },
};
