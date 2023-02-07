import React from "react";
import { useNode } from "@craftjs/core";
import ComponentConfigTemplate from "../../display/ComponentConfigTemplate";
import { Input, Select, Switch } from "antd";

function TextConfig() {
  const {
    actions: { setProp },
    fontSize,
    isBold,
    isItalic,
    isUnderline,
    textAlign,
    color,
  } = useNode((node: any) => ({
    fontSize: node.data.props.fontSize,
    isBold: node.data.props.isBold,
    isItalic: node.data.props.isItalic,
    isUnderline: node.data.props.isUnderline,
    textAlign: node.data.props.textAlign,
    color: node.data.props.color,
  }));
  return (
    <div className="flex flex-col gap-y-4 pb-20">
      <ComponentConfigTemplate configName="General">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Font size</div>
          <Input
            className="w-1/2"
            placeholder="Font size"
            defaultValue={fontSize}
            onChange={(e) =>
              setProp((props: any) => (props.fontSize = Number(e.target.value)))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/3">Color</div>
          <input
            type="color"
            defaultValue={color}
            onChange={(e) =>
              setProp((props: any) => (props.color = e.target.value))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Bold</div>
          <Switch
            defaultChecked={isBold}
            onChange={(value) =>
              setProp((props: any) => (props.isBold = value))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Italic</div>
          <Switch
            defaultChecked={isItalic}
            onChange={(value) =>
              setProp((props: any) => (props.isItalic = value))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Underline</div>
          <Switch
            defaultChecked={isUnderline}
            onChange={(value) =>
              setProp((props: any) => (props.isUnderline = value))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Text align</div>
          <Select
            className="w-1/2"
            defaultValue={textAlign}
            options={[
              { value: "left", label: "Left" },
              { value: "center", label: "Center" },
              { value: "right", label: "Right" },
            ]}
            onChange={(value) =>
              setProp((props: any) => (props.textAlign = value))
            }
          />
        </div>
      </ComponentConfigTemplate>
    </div>
  );
}

export default TextConfig;
