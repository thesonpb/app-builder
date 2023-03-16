import React from "react";
import { useNode } from "@craftjs/core";
import ComponentConfigTemplate from "../../display/ComponentConfigTemplate";
import { Button, Input, Select, Switch } from "antd";

function CheckboxConfig() {
  const {
    actions: { setProp },
    title,
    isVertical,
    showTitle,
    listOption,
  } = useNode((node: any) => ({
    title: node.data.props.title,
    isVertical: node.data.props.isVertical,
    showTitle: node.data.props.showTitle,
    listOption: node.data.props.listOption,
  }));

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newOptions = [...listOption];
    newOptions[index] = event.target.value;
    setProp((props: any) => (props.listOption = newOptions));
  };

  const add = () => {
    setProp(
      (props: any) =>
        (props.listOption = [...listOption, `Option ${listOption.length + 1}`])
    );
  };

  const remove = (index: number) => {
    const newOptions = [...listOption];
    newOptions.splice(index, 1);
    setProp((props: any) => (props.listOption = newOptions));
  };
  return (
    <div className="flex flex-col gap-y-4 pb-20">
      <ComponentConfigTemplate configName="General">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/3">Layout</div>
          <Select
            className="w-2/3"
            defaultValue={isVertical ? "VERTICAL" : "HORIZONTAL"}
            options={[
              { value: "VERTICAL", label: "VERTICAL" },
              { value: "HORIZONTAL", label: "HORIZONTAL" },
            ]}
            onChange={(value) =>
              setProp((props: any) => (props.isVertical = value === "VERTICAL"))
            }
          />
        </div>
      </ComponentConfigTemplate>
      <ComponentConfigTemplate configName="Title">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Title</div>
          <Switch
            defaultChecked={showTitle}
            onChange={(value) =>
              setProp((props: any) => (props.showTitle = value))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <Input
            placeholder="Title"
            defaultValue={title}
            onChange={(e) =>
              setProp((props: any) => (props.title = e.target.value))
            }
          />
        </div>
      </ComponentConfigTemplate>
      <ComponentConfigTemplate configName="Options">
        {listOption.map((tab: string, index: number) => (
          <div
            key={index}
            className="flex gap-x-2 items-center justify-between"
          >
            <Input
              placeholder="Option"
              defaultValue={tab}
              onChange={(e) => handleChange(index, e)}
            />
            <Button danger type="primary" onClick={() => remove(index)}>
              Remove
            </Button>
          </div>
        ))}
        <Button type="primary" onClick={add}>
          Add
        </Button>
      </ComponentConfigTemplate>
    </div>
  );
}

export default CheckboxConfig;
