import React from "react";
import { useNode } from "@craftjs/core";
import { Button, Input, MenuProps } from "antd";
import ComponentConfigTemplate from "../../display/ComponentConfigTemplate";

function BreadcrumbsConfig() {
  const {
    actions: { setProp },
    listOption,
  } = useNode((node: any) => ({
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
        (props.listOption = [...listOption, `Item ${listOption.length + 1}`])
    );
  };

  const remove = (index: number) => {
    const newOptions = [...listOption];
    newOptions.splice(index, 1);
    setProp((props: any) => (props.listOption = newOptions));
  };
  return (
    <div className="flex flex-col gap-y-4 pb-20">
      <ComponentConfigTemplate configName="Items">
        {listOption.map((tab: string, index: number) => (
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

export default BreadcrumbsConfig;
