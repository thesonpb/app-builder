import React from "react";
import type { DatePickerProps, TimePickerProps } from "antd";
import { DatePicker, TimePicker } from "antd";
import { useNode } from "@craftjs/core";
import { USER_COMPONENT_NAME } from "../../../app/constants/userComponentName";
import DateTimePickerConfig from "./DateTimePickerConfig";

type PickerType = "time" | "date";

const PickerWithType = ({
  type,
  onChange,
}: {
  type: PickerType;
  onChange: TimePickerProps["onChange"] | DatePickerProps["onChange"];
}) => {
  if (type === "time") return <TimePicker onChange={onChange} />;
  if (type === "date") return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};

interface Props {
  type?: PickerType;
}

const defaultProps = {
  type: "date",
};

export const DateTimePicker = (props: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { type = "date" } = props;

  return (
    <div ref={(ref: any) => connect(drag(ref))}>
      <PickerWithType type={type} onChange={(value) => console.log(value)} />
    </div>
  );
};

DateTimePicker.defaultProps = defaultProps;

DateTimePicker.craft = {
  displayName: USER_COMPONENT_NAME.DATE_TIME_PICKER,
  props: defaultProps,
  related: {
    settings: DateTimePickerConfig,
  },
};
