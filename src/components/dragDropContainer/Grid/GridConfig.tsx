import React from "react";
import { useNode } from "@craftjs/core";
import { Input, Select } from "antd";
import ComponentConfigTemplate from "../../display/ComponentConfigTemplate";

function GridConfig() {
  const {
    actions: { setProp },
    isCol,
    numCols,
    numRows,
    gapX,
    gapY,
  } = useNode((node: any) => ({
    isCol: node.data.props.isCol,
    numCols: node.data.props.numCols,
    numRows: node.data.props.numRows,
    gapX: node.data.props.gapX,
    gapY: node.data.props.gapY,
  }));

  return (
    <div className="flex flex-col gap-y-4 pb-20">
      <ComponentConfigTemplate configName="Layout">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Display</div>
          <Select
            className="w-1/2"
            defaultValue={isCol}
            options={[
              { value: true, label: "Column" },
              { value: false, label: "Row" },
            ]}
            onChange={(value) => setProp((props: any) => (props.isCol = value))}
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">{isCol ? "Columns" : "Rows"}</div>
          <Input
            className="w-1/2"
            defaultValue={isCol ? numCols : numRows}
            value={isCol ? numCols : numRows}
            onChange={(e) =>
              setProp((props: any) =>
                isCol
                  ? (props.numCols = e.target.value)
                  : (props.numRows = e.target.value)
              )
            }
          />
        </div>
      </ComponentConfigTemplate>
      <ComponentConfigTemplate configName="Gap">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">X</div>
          <Input
            className="w-1/2"
            defaultValue={gapX}
            value={gapX}
            onChange={(e) =>
              setProp((props: any) => (props.gapX = e.target.value))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Y</div>
          <Input
            className="w-1/2"
            defaultValue={gapY}
            value={gapY}
            onChange={(e) =>
              setProp((props: any) => (props.gapY = e.target.value))
            }
          />
        </div>
      </ComponentConfigTemplate>
    </div>
  );
}

export default GridConfig;
