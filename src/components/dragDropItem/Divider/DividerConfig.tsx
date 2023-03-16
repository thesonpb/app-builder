import React from "react";
import { useNode } from "@craftjs/core";
import ComponentConfigTemplate from "../../display/ComponentConfigTemplate";
import { Input, Select, Switch } from "antd";

function DividerConfig() {
  const {
    actions: { setProp },
    direction,
    showText,
    text,
    align,
  } = useNode((node: any) => ({
    direction: node.data.props.direction,
    showText: node.data.props.showText,
    text: node.data.props.text,
    align: node.data.props.align,
  }));
  return (
    <div className="flex flex-col gap-y-4 pb-20">
      <ComponentConfigTemplate configName="General">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/3">Direction</div>
          <Select
            className="w-2/3"
            defaultValue={direction}
            onChange={(e) => setProp((props: any) => (props.direction = e))}
            options={[
              {
                value: "horizontal",
                label: "Horizontal",
              },
              {
                value: "vertical",
                label: "Vertical",
              },
            ]}
          />
        </div>
        {direction === "horizontal" && (
          <div>
            <div className="flex gap-x-2 items-center justify-between">
              <div className="w-1/2">Show Text</div>
              <Switch
                defaultChecked={showText}
                onChange={(value) =>
                  setProp((props: any) => (props.showText = value))
                }
              />
            </div>
            {showText && (
              <div>
                <div className="flex gap-x-2 items-center justify-between mt-2">
                  <Input
                    placeholder="Text"
                    defaultValue={text}
                    onChange={(e) =>
                      setProp((props: any) => (props.text = e.target.value))
                    }
                  />
                </div>
                <div className="flex gap-x-2 items-center justify-between mt-2">
                  <div className="w-1/3">Text Align</div>
                  <Select
                    className="w-2/3"
                    defaultValue={align}
                    onChange={(e) => setProp((props: any) => (props.align = e))}
                    options={[
                      {
                        value: "left",
                        label: "Left",
                      },
                      {
                        value: "center",
                        label: "Center",
                      },
                      {
                        value: "right",
                        label: "Right",
                      },
                    ]}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </ComponentConfigTemplate>
    </div>
  );
}

export default DividerConfig;
