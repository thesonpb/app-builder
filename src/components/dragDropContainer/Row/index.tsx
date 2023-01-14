import React from "react";
import { Row as AntRow } from "antd";
import { useNode } from "@craftjs/core";

interface Props {}

export const Row = ({}: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return <AntRow ref={(ref: any) => connect(drag(ref))}></AntRow>;
};
