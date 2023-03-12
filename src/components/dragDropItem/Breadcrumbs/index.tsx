import React from "react";
import { Breadcrumb } from "antd";
import { useNode } from "@craftjs/core";
import { USER_COMPONENT_NAME } from "../../../app/constants/userComponentName";
import BreadcrumbsConfig from "./BreadcrumbsConfig";

interface Props {
  listOption?: string[];
}

const defaultProps = {
  listOption: [
    "Home",
    "Application Center",
    "Application List",
    "An Application",
  ],
};

export const Breadcrumbs = (props: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { listOption } = props;

  return (
    <div ref={(ref: any) => connect(drag(ref))}>
      <Breadcrumb>
        {listOption?.map((item, index) => (
          <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
};

Breadcrumbs.defaultProps = defaultProps;

Breadcrumbs.craft = {
  displayName: USER_COMPONENT_NAME.BREADCRUMBS,
  props: defaultProps,
  related: {
    settings: BreadcrumbsConfig,
  },
};
