import React from "react";
import { useNode } from "@craftjs/core";
import ComponentConfigTemplate from "../../display/ComponentConfigTemplate";
import { Button, Input, Select } from "antd";

function MenuConfig() {
  const {
    actions: { setProp },
    direction,
    items,
  } = useNode((node) => ({
    direction: node.data.props.direction,
    items: node.data.props.items,
  }));

  const directionOptions = [
    { value: "vertical", label: "Vertical" },
    { value: "horizontal", label: "Horizontal" },
  ];

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
      (props: any) => (props.items = [...items, `Item ${items.length + 1}`])
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
          <div className="w-1/3">Direction</div>
          <Select
            className="w-2/3"
            defaultValue={direction}
            options={directionOptions}
            onChange={(value) =>
              setProp((props: any) => (props.direction = value))
            }
          />
        </div>
      </ComponentConfigTemplate>
      <ComponentConfigTemplate configName="Items">
        {items.map((tab: string, index: number) => (
          <div
            key={index}
            className="flex gap-x-2 items-center justify-between"
          >
            <Input
              placeholder="Item"
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

export default MenuConfig;
