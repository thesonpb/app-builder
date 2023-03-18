import React from "react";
import { useNode } from "@craftjs/core";
import ComponentConfigTemplate from "../../display/ComponentConfigTemplate";
import { Button, Input } from "antd";

interface Column {
  title: string;
  dataIndex: string;
  key: string;
}

function TableConfig() {
  const {
    actions: { setProp },
    columns,
    dataSource,
  } = useNode((node: any) => ({
    columns: node.data.props.columns,
    dataSource: node.data.props.dataSource,
  }));

  const handleColumnsChange = (newColumns: Column[]) => {
    setProp((props: any) => (props.columns = newColumns));
  };

  const handleDataSourceChange = (newDataSource: any[]) => {
    setProp((props: any) => (props.dataSource = newDataSource));
  };

  const handleAddColumn = () => {
    const newColumn: Column = {
      title: `Column ${columns.length + 1}`,
      dataIndex: `newColumn${columns.length + 1}`,
      key: `newColumn${columns.length + 1}`,
    };

    const newColumns = [...columns, newColumn];
    const newDataSource = dataSource.map((data: any) => {
      return { ...data, [newColumn.dataIndex]: "New data" };
    });

    handleColumnsChange(newColumns);
    handleDataSourceChange(newDataSource);
  };

  const handleRemoveColumn = (index: number) => {
    const removedColumn = columns[index];
    const newColumns = [...columns];
    newColumns.splice(index, 1);
    const newDataSource = dataSource.map((data: any) => {
      const newData = { ...data };
      delete newData[removedColumn.dataIndex];
      return newData;
    });

    handleColumnsChange(newColumns);
    handleDataSourceChange(newDataSource);
  };

  return (
    <div className="flex flex-col gap-y-4 pb-20">
      <ComponentConfigTemplate configName="Columns">
        {columns.map((col: any, index: any) => (
          <div
            key={col.key}
            className="flex gap-x-2 items-center justify-between"
          >
            <Input
              defaultValue={col.title}
              onChange={(e) => {
                const newColumns = [...columns];
                newColumns[index].title = e.target.value;
                handleColumnsChange(newColumns);
              }}
            />
            <Button
              danger
              type="primary"
              onClick={() => handleRemoveColumn(index)}
            >
              Remove
            </Button>
          </div>
        ))}
        <Button type="primary" className="mt-2" onClick={handleAddColumn}>
          Add Column
        </Button>
      </ComponentConfigTemplate>
    </div>
  );
}
export default TableConfig;
