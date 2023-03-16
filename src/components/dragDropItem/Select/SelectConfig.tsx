import React from "react";
import { useNode } from "@craftjs/core";
import ComponentConfigTemplate from "../../display/ComponentConfigTemplate";
import { Button, Input, Select, Switch } from "antd";

function SelectConfig() {
  const {
    actions: { setProp },
    label,
    isVertical,
    showLabel,
    showPlaceHolder,
    placeholder,
    showSearch,
    items,
  } = useNode((node) => ({
    label: node.data.props.label,
    isVertical: node.data.props.isVertical,
    showLabel: node.data.props.showLabel,
    showPlaceHolder: node.data.props.showPlaceHolder,
    placeholder: node.data.props.placeholder,
    showSearch: node.data.props.showSearch,
    items: node.data.props.items,
  }));

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newItems = [...items];
    newItems[index] = event.target.value;
    setProp((props: any) => (props.items = newItems));
  };

  const add = () => {
    setProp(
      (props: any) => (props.items = [...items, `Option ${items.length + 1}`])
    );
  };

  const remove = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setProp((props: any) => (props.items = newItems));
  };

  return (
    <div className="flex flex-col gap-y-4 pb-20">
      <ComponentConfigTemplate configName="General">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/3">Layout</div>
          <Select
            className="w-2/3"
            defaultValue={isVertical ? "vertical" : "horizontal"}
            options={[
              { value: "vertical", label: "Vertical" },
              { value: "horizontal", label: "Horizontal" },
            ]}
            onChange={(value) =>
              setProp((props: any) => (props.isVertical = value === "vertical"))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Showsearch</div>
          <Switch
            defaultChecked={showSearch}
            onChange={(value) =>
              setProp((props: any) => (props.showSearch = value))
            }
          />
        </div>
      </ComponentConfigTemplate>
      <ComponentConfigTemplate configName="Title">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Title</div>
          <Switch
            defaultChecked={showLabel}
            onChange={(value) =>
              setProp((props: any) => (props.showLabel = value))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <Input
            placeholder="Title"
            defaultValue={label}
            onChange={(e) =>
              setProp((props: any) => (props.label = e.target.value))
            }
          />
        </div>
      </ComponentConfigTemplate>
      <ComponentConfigTemplate configName="Placeholder">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Placeholder</div>
          <Switch
            defaultChecked={showPlaceHolder}
            onChange={(value) =>
              setProp((props: any) => (props.showPlaceHolder = value))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <Input
            placeholder="Placeholder"
            defaultValue={placeholder}
            onChange={(e) =>
              setProp((props: any) => (props.placeholder = e.target.value))
            }
          />
        </div>
      </ComponentConfigTemplate>
      <ComponentConfigTemplate configName="Options">
        {items.map((tab: string, index: number) => (
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
export default SelectConfig;
