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
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    backgroundColor,
    borderWidth,
    borderStyle,
    borderColor,
    showBorder,
  } = useNode((node: any) => ({
    isCol: node.data.props.isCol,
    numCols: node.data.props.numCols,
    numRows: node.data.props.numRows,
    gapX: node.data.props.gapX,
    gapY: node.data.props.gapY,
    padding: node.data.props.padding,
    paddingTop: node.data.props.paddingTop,
    paddingBottom: node.data.props.paddingBottom,
    paddingLeft: node.data.props.paddingLeft,
    paddingRight: node.data.props.paddingRight,
    margin: node.data.props.margin,
    marginTop: node.data.props.marginTop,
    marginBottom: node.data.props.marginBottom,
    marginLeft: node.data.props.marginLeft,
    marginRight: node.data.props.marginRight,
    borderRadius: node.data.props.borderRadius,
    borderTopLeftRadius: node.data.props.borderTopLeftRadius,
    borderTopRightRadius: node.data.props.borderTopRightRadius,
    borderBottomLeftRadius: node.data.props.borderBottomLeftRadius,
    borderBottomRightRadius: node.data.props.borderBottomRightRadius,
    backgroundColor: node.data.props.backgroundColor,
    borderWidth: node.data.props.borderWidth,
    borderStyle: node.data.props.borderStyle,
    borderColor: node.data.props.borderColor,
    showBorder: node.data.props.showBorder,
  }));

  return (
    <div className="flex flex-col gap-y-4 pb-20">
      <ComponentConfigTemplate configName="General">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Padding</div>
          <Input
            className="w-1/2"
            defaultValue={padding}
            onChange={(e) =>
              setProp((props: any) => (props.padding = e.target.value))
            }
          />
        </div>
      </ComponentConfigTemplate>
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
