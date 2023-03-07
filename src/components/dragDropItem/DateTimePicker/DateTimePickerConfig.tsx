import React from "react";
import { useNode } from "@craftjs/core";
import ComponentConfigTemplate from "../../display/ComponentConfigTemplate";
import { Select } from "antd";

function DateTimePicker() {
  const {
    actions: { setProp },
    type,
  } = useNode((node: any) => ({
    type: node.data.props.type,
  }));

  return (
    <div className="flex flex-col gap-y-4 pb-20">
      <ComponentConfigTemplate configName="General">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/3">Type</div>
          <Select
            className="w-2/3"
            defaultValue={type}
            options={[
              { value: "time", label: "Time" },
              { value: "date", label: "Date" },
              { value: "week", label: "Week" },
              { value: "month", label: "Month" },
              { value: "quarter", label: "Quarter" },
              { value: "year", label: "Year" },
            ]}
            onChange={(value) => setProp((props: any) => (props.type = value))}
          />
        </div>
      </ComponentConfigTemplate>
    </div>
  );
}

export default DateTimePicker;
