import React from "react";
import { Table as TableAntd } from "antd";
import { useNode } from "@craftjs/core";
import { USER_COMPONENT_NAME } from "../../../app/constants/userComponentName";
import TableConfig from "./TableConfig";

interface Column {
  title: string;
  dataIndex: string;
  key: string;
}

interface Props {
  columns: Column[];
  dataSource: any[];
}

const defaultProps: Props = {
  columns: [
    { title: "Column 1", dataIndex: "column1", key: "column1" },
    { title: "Column 2", dataIndex: "column2", key: "column2" },
  ],
  dataSource: [
    { column1: "Data 1-1", column2: "Data 1-2" },
    { column1: "Data 2-1", column2: "Data 2-2" },
    { column1: "Data 3-1", column2: "Data 3-2" },
  ],
};

export const Table = (props: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { columns, dataSource } = props;

  return (
    <div ref={(ref: any) => connect(drag(ref))}>
      <TableAntd columns={columns} dataSource={dataSource} />
    </div>
  );
};

Table.defaultProps = defaultProps;

Table.craft = {
  displayName: USER_COMPONENT_NAME.TABLE,
  props: defaultProps,
  related: {
    settings: TableConfig,
  },
};
