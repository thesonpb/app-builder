import React from "react";
import { Col as AntColumn } from "antd";
import { useNode } from "@craftjs/core";

interface Props {}

export const Column = ({}: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return <AntColumn ref={(ref: any) => connect(drag(ref))}></AntColumn>;
};
