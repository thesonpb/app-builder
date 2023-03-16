import React from "react";
import { Statistic as AntStatistic } from "antd";
import { useNode } from "@craftjs/core";
import { USER_COMPONENT_NAME } from "../../../app/constants/userComponentName";
import StatisticConfig from "./StatisticConfig";

interface Props {
  title: string;
  value: number;
}

const defaultProps = {
  title: "Title",
  value: 100000,
};

export const Statistic = (props: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { title, value } = props;

  return (
    <div ref={(ref: any) => connect(drag(ref))}>
      <AntStatistic title={title} value={value} />
    </div>
  );
};

Statistic.defaultProps = defaultProps;

Statistic.craft = {
  displayName: USER_COMPONENT_NAME.STATISTIC,
  props: defaultProps,
  related: {
    settings: StatisticConfig,
  },
};
