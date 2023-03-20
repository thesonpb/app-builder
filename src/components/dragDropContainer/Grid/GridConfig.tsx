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
    margin,
    borderRadius,
    backgroundColor,
    borderWidth,
    borderStyle,
    borderColor,
  } = useNode((node: any) => ({
    isCol: node.data.props.isCol,
    numCols: node.data.props.numCols,
    numRows: node.data.props.numRows,
    gapX: node.data.props.gapX,
    gapY: node.data.props.gapY,
    padding: node.data.props.padding,
    margin: node.data.props.margin,
    borderRadius: node.data.props.borderRadius,
    backgroundColor: node.data.props.backgroundColor,
    borderWidth: node.data.props.borderWidth,
    borderStyle: node.data.props.borderStyle,
    borderColor: node.data.props.borderColor,
  }));

  return (
    <div className="flex flex-col gap-y-4 pb-20">
      <ComponentConfigTemplate configName="General">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Background Color</div>
          <input
            className="w-1/2"
            type="color"
            defaultValue={backgroundColor}
            onChange={(e) =>
              setProp((props: any) => (props.backgroundColor = e.target.value))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Padding</div>
          <Input
            className="w-1/2"
            defaultValue={
              (padding?.includes("px")
                ? padding.replace(/px/g, "")
                : padding) || 0
            }
            onChange={(e) =>
              setProp((props: any) => (props.padding = e.target.value))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Margin</div>
          <Input
            className="w-1/2"
            defaultValue={
              (margin?.includes("px") ? margin.replace(/px/g, "") : margin) || 0
            }
            onChange={(e) =>
              setProp((props: any) => (props.margin = e.target.value))
            }
          />
        </div>
      </ComponentConfigTemplate>
      <ComponentConfigTemplate configName="Border">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Border Width</div>
          <Input
            className="w-1/2"
            defaultValue={
              (borderWidth?.includes("px")
                ? borderWidth.replace(/px/g, "")
                : borderWidth) || 0
            }
            onChange={(e) =>
              setProp((props: any) => (props.borderWidth = e.target.value))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Border Style</div>
          <Select
            className="w-1/2"
            defaultValue={borderStyle}
            options={[
              { value: "none", label: "None" },
              { value: "solid", label: "Solid" },
              { value: "dotted", label: "Dotted" },
              { value: "dashed", label: "Dashed" },
              { value: "double", label: "Double" },
            ]}
            onChange={(value) =>
              setProp((props: any) => (props.borderStyle = value))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Border Color</div>
          <input
            className="w-1/2"
            type="color"
            defaultValue={borderColor}
            onChange={(e) =>
              setProp((props: any) => (props.borderColor = e.target.value))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Border Radius</div>
          <Input
            className="w-1/2"
            defaultValue={
              (borderRadius?.includes("px")
                ? borderRadius.replace(/px/g, "")
                : borderRadius) || 0
            }
            onChange={(e) =>
              setProp((props: any) => (props.borderRadius = e.target.value))
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
