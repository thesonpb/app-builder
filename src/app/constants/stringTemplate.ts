export const grid = `
import React from "react";

interface Props {
  isCol?: boolean;
  numCols?: string;
  numRows?: string;
  backgroundColor?: string;
  gap?: string;
  gapX?: string;
  gapY?: string;
  children: React.ReactNode;
  margin?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
  padding?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  borderRadius?: string;
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
  borderBottomLeftRadius?: string;
  borderBottomRightRadius?: string;
  height?: string;
  width?: string;
  minHeight?: string;
  minWidth?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
  maxWidth?: string;
  maxHeight?: string;
  className?: string;
  showBorder?: boolean;
}

const defaultProps = {
  gap: "0",
  isCol: true,
  numCols: "2",
  numRows: "2",
  gapX: "0",
  gapY: "0",
  minHeight: "10rem",
  borderRadius: "1rem",
  borderColor: "#f2f2f2",
  borderStyle: "solid",
  borderWidth: "1px",
  marginTop: "1rem",
  padding: "1rem",
  backgroundColor: "white",
  showBorder: true,
  children: undefined,
};

export const Grid = (props: Props) => {
  const {
    isCol,
    numCols,
    numRows,
    gapX,
    gapY,
    children,
    showBorder,
    padding,
    margin,
    borderRadius,
    paddingTop,
    paddingRight,
    paddingLeft,
    paddingBottom,
    marginTop,
    marginRight,
    marginLeft,
    marginBottom,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderWidth,
  } = props;

  const layout = isCol
    ? {
        gridTemplateColumns: 'repeat(\${numCols}, minmax(0, 1fr))',
      }
    : {
        gridTemplateRows: 'repeat(\${numRows}, minmax(0, 1fr))',
        gridAutoFlow: "column",
      };
  return (
    <div
      className="grid"
      style={{
        ...props,
        ...layout,
        columnGap: '\${gapX}px',
        rowGap: '\${gapY}px',
        padding: '\${padding}px',
        paddingTop: '\${paddingTop}px',
        paddingBottom: '\${paddingBottom}px',
        paddingLeft: '\${paddingLeft}px',
        paddingRight: '\${paddingRight}px',
        margin: '\${margin}px',
        marginTop: '\${marginTop}px',
        marginBottom: '\${marginBottom}px',
        marginLeft: '\${marginLeft}px',
        marginRight: '\${marginRight}px',
        borderRadius: '\${borderRadius}px',
        borderTopLeftRadius: '\${borderTopLeftRadius}px',
        borderTopRightRadius: '\${borderTopRightRadius}px',
        borderBottomLeftRadius: '\${borderBottomLeftRadius}px',
        borderBottomRightRadius: '\${borderBottomRightRadius}px',
        borderWidth: showBorder ? '\${borderWidth}px' : "0",
      }}
    >
      {children}
    </div>
  );
};

Grid.defaultProps = defaultProps;
`;

export const container = `
import React from "react";

interface Props {
  backgroundColor?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  borderBottomLeftRadius?: string;
  borderBottomRightRadius?: string;
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
  children?: React.ReactNode;
  padding?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  margin?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
  minHeight?: string;
  minWidth?: string;
  maxWidth?: string;
  maxHeight?: string;
  className?: string;
}

const defaultProps = {
  backgroundColor: "white",
  minHeight: "10rem",
  padding: "1rem",
  borderRadius: "1rem",
  borderColor: "#f2f2f2",
  borderStyle: "solid",
  borderWidth: "1px",
  marginTop: "1rem",
};

export const Container = (props: Props) => {
  const { className, children } = props;
  return (
    <div
      style={{
        ...props,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

Container.defaultProps = defaultProps;
  `;

export const button = `
import React from "react";
import { Button as AntButton } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
declare const ButtonTypes: [
  "primary",
  "link",
  "text",
  "ghost",
  "default",
  "dashed",
  undefined
];
declare type ButtonType = (typeof ButtonTypes)[number];

interface Props {
  size?: SizeType;
  type?: ButtonType;
  color?: string;
  text?: string;
  backgroundColor?: string;
}

const defaultProps = {
  size: "middle",
  type: "primary",
  color: "",
  text: "Button",
  backgroundColor: "",
};

export const Button = (props: Props) => {
  const { size, type, color, text, backgroundColor } = props;

  return (
    <AntButton
      size={size}
      type={type}
      style={{ color, backgroundColor }}
    >
      {text}
    </AntButton>
  );
};

Button.defaultProps = defaultProps;
  `;

export const input = `
import React from "react";
import { Form, Input as InputAntd } from "antd";

interface Props {
  placeholder?: string;
  label?: string;
  showLabel?: boolean;
  isVertical?: boolean;
  showPlaceHolder?: boolean;
  color?: string;
  isPassword?: boolean;
}

const defaultProps = {
  placeholder: "Place holder",
  isVertical: true,
  showPlaceHolder: true,
  label: "Label",
  showLabel: true,
  color: "black",
  isPassword: false,
};

export const Input = (props: Props) => {
  const {
    isVertical,
    showLabel,
    label,
    showPlaceHolder,
    placeholder,
    color,
    isPassword,
  } = props;
  return (
    <div>
      <Form.Item>
        <div className={isVertical ? "" : "flex items-center"}>
          {showLabel && (
            <label className="mr-4 font-bold" style={{ color }}>
              {label}:
            </label>
          )}
          {isPassword ? (
            <InputAntd.Password
              placeholder={showPlaceHolder ? placeholder : ""}
            />
          ) : (
            <InputAntd placeholder={showPlaceHolder ? placeholder : ""} />
          )}
        </div>
      </Form.Item>
    </div>
  );
};

Input.defaultProps = defaultProps;
  `;

export const paragraph = `
import React from "react";

interface Props {
  text?: string;
  fontSize?: number;
  isBold?: boolean;
  isItalic?: boolean;
  isUnderline?: boolean;
}

export const Paragraph = ({
  text = "Paragraph",
  fontSize,
  isBold,
  isItalic,
  isUnderline,
}: Props) => {
  return (
    <p
     
      className='m-0 \${isBold ? "font-bold" : ""} \${isItalic ? "italic" : ""} \${
  isUnderline ? "underline" : ""
}'
      style={{ fontSize }}
    >
      {text}
    </p>
  );
};
  `;

export const text =
  'import React from "react";\n' +
  'import ContentEditable from "react-contenteditable";\n' +
  "\n" +
  "interface Props {\n" +
  "    text?: string;\n" +
  "    fontSize?: number;\n" +
  "    isBold?: boolean;\n" +
  "    isItalic?: boolean;\n" +
  "    isUnderline?: boolean;\n" +
  "    textAlign?: string;\n" +
  "    color?: string;\n" +
  "}\n" +
  "\n" +
  "const defaultProps = {\n" +
  '    text: "Text",\n' +
  "    fontSize: 16,\n" +
  "    isBold: false,\n" +
  "    isItalic: false,\n" +
  "    isUnderline: false,\n" +
  '    textAlign: "left",\n' +
  '    color: "black",\n' +
  "};\n" +
  "\n" +
  "export const Text = (props: Props) => {\n" +
  "    const { text, fontSize, isBold, isItalic, isUnderline, textAlign, color } =\n" +
  "        props;\n" +
  "\n" +
  "    return (\n" +
  "        <ContentEditable\n" +
  '            html={text || ""}\n' +
  "            disabled={false}\n" +
  "            onChange={(e) => {\n" +
  "                console.log(e.target.value);\n" +
  "            }}\n" +
  '            tagName="div"\n' +
  '            className={`mt-4 mb-0 ${isBold ? "font-bold" : ""} ${\n' +
  '                isItalic ? "italic" : ""\n' +
  '            } ${isUnderline ? "underline" : ""}`}\n' +
  "            style={{ fontSize, textAlign, color }}\n" +
  "        />\n" +
  "    );\n" +
  "};\n" +
  "\n" +
  "Text.defaultProps = defaultProps;\n";

export const radiobox =
  'import React from "react";\n' +
  'import { Form, Radio, Space } from "antd";\n' +
  "\n" +
  "interface Props {\n" +
  "  title?: string;\n" +
  "  listOption?: string[];\n" +
  "  isVertical?: boolean;\n" +
  "  showTitle?: boolean;\n" +
  "}\n" +
  "\n" +
  "const defaultProps = {\n" +
  "  isVertical: true,\n" +
  '  listOption: ["Option 1", "Options 2"],\n' +
  '  title: "Title",\n' +
  "  showTitle: true,\n" +
  "};\n" +
  "\n" +
  "export const Radiobox = (props: Props) => {\n" +
  "  const { isVertical, listOption, title, showTitle } = props;\n" +
  "  return (\n" +
  "    <div>\n" +
  "      <Form.Item>\n" +
  "        <div>\n" +
  '          {showTitle && <label className="mr-4 font-bold">{title}</label>}\n' +
  '          <Space direction={isVertical ? "vertical" : "horizontal"}>\n' +
  "            {listOption?.map((item) => (\n" +
  "              <Radio>{item}</Radio>\n" +
  "            ))}\n" +
  "          </Space>\n" +
  "        </div>\n" +
  "      </Form.Item>\n" +
  "    </div>\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "Radiobox.defaultProps = defaultProps;";

export const checkbox =
  'import React from "react";\n' +
  'import { Checkbox as AntCheckbox, Form, Space } from "antd";\n' +
  "\n" +
  "interface Props {\n" +
  "  title?: string;\n" +
  "  listOption?: string[];\n" +
  "  isVertical?: boolean;\n" +
  "  showTitle?: boolean;\n" +
  "}\n" +
  "\n" +
  "const defaultProps = {\n" +
  "  isVertical: true,\n" +
  '  listOption: ["Option 1", "Options 2"],\n' +
  '  title: "Title",\n' +
  "  showTitle: true,\n" +
  "};\n" +
  "\n" +
  "export const Checkbox = (props: Props) => {\n" +
  "  const { isVertical, listOption, title, showTitle } = props;\n" +
  "  return (\n" +
  "    <div>\n" +
  "      <Form.Item>\n" +
  "        <div>\n" +
  '          {showTitle && <label className="mr-4 font-bold">{title}</label>}\n' +
  '          <Space direction={isVertical ? "vertical" : "horizontal"}>\n' +
  "            {listOption?.map((item) => (\n" +
  "              <AntCheckbox>{item}</AntCheckbox>\n" +
  "            ))}\n" +
  "          </Space>\n" +
  "        </div>\n" +
  "      </Form.Item>\n" +
  "    </div>\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "Checkbox.defaultProps = defaultProps;";

export const datetimepicker =
  'import React from "react";\n' +
  'import type { DatePickerProps, TimePickerProps } from "antd";\n' +
  'import { DatePicker, TimePicker } from "antd";\n' +
  "\n" +
  'type PickerType = "time" | "date";\n' +
  "\n" +
  "const PickerWithType = ({\n" +
  "  type,\n" +
  "  onChange,\n" +
  "}: {\n" +
  "  type: PickerType;\n" +
  '  onChange: TimePickerProps["onChange"] | DatePickerProps["onChange"];\n' +
  "}) => {\n" +
  '  if (type === "time") return <TimePicker onChange={onChange} />;\n' +
  '  if (type === "date") return <DatePicker onChange={onChange} />;\n' +
  "  return <DatePicker picker={type} onChange={onChange} />;\n" +
  "};\n" +
  "\n" +
  "interface Props {\n" +
  "  type?: PickerType;\n" +
  "}\n" +
  "\n" +
  "const defaultProps = {\n" +
  '  type: "date",\n' +
  "};\n" +
  "\n" +
  "export const DateTimePicker = (props: Props) => {\n" +
  '  const { type = "date" } = props;\n' +
  "\n" +
  "  return (\n" +
  "    <div>\n" +
  "      <PickerWithType type={type} onChange={(value) => console.log(value)} />\n" +
  "    </div>\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "DateTimePicker.defaultProps = defaultProps;";

export const breadcrumbs =
  'import React from "react";\n' +
  'import { Breadcrumb } from "antd";\n' +
  "\n" +
  "interface Props {\n" +
  "    listOption?: string[];\n" +
  "}\n" +
  "\n" +
  "const defaultProps = {\n" +
  "    listOption: [\n" +
  '        "Home",\n' +
  '        "Application Center",\n' +
  '        "Application List",\n' +
  '        "An Application",\n' +
  "    ],\n" +
  "};\n" +
  "\n" +
  "export const Breadcrumbs = (props: Props) => {\n" +
  "    const { listOption } = props;\n" +
  "\n" +
  "    return (\n" +
  "        <div>\n" +
  "            <Breadcrumb>\n" +
  "                {listOption?.map((item) => (\n" +
  "                    <Breadcrumb.Item>{item}</Breadcrumb.Item>\n" +
  "                ))}\n" +
  "            </Breadcrumb>\n" +
  "        </div>\n" +
  "    );\n" +
  "};\n" +
  "\n" +
  "Breadcrumbs.defaultProps = defaultProps;\n";

export const image =
  'import React from "react";\n' +
  "\n" +
  "interface Props {\n" +
  "    src?: string;\n" +
  "    width?: number;\n" +
  "}\n" +
  "\n" +
  "const defaultProps = {\n" +
  '    src: "https://picsum.photos/200",\n' +
  "    width: 200,\n" +
  "};\n" +
  "\n" +
  "export const Image = (props: Props) => {\n" +
  "    const { src, width } = props;\n" +
  "\n" +
  "    return (\n" +
  "        <div>\n" +
  "            <Image width={width} src={src} />\n" +
  "        </div>\n" +
  "    );\n" +
  "};\n" +
  "\n" +
  "Image.defaultProps = defaultProps;\n";

export const divider =
  'import React from "react";\n' +
  'import { Divider as AntDivider } from "antd";\n' +
  "\n" +
  "interface Props {\n" +
  '  direction?: "horizontal" | "vertical" | undefined;\n' +
  "  showText?: boolean;\n" +
  "  text?: string;\n" +
  '  align?: "center" | "left" | "right" | undefined;\n' +
  "}\n" +
  "\n" +
  "const defaultProps = {\n" +
  '  direction: "horizontal",\n' +
  "  showText: false,\n" +
  '  text: "",\n' +
  "  align: undefined,\n" +
  "};\n" +
  "\n" +
  "export const Divider = (props: Props) => {\n" +
  "  const { direction, showText, text, align } = props;\n" +
  "  return (\n" +
  "    <div>\n" +
  "      <AntDivider type={direction} plain={showText} orientation={align}>\n" +
  "        {text}\n" +
  "      </AntDivider>\n" +
  "    </div>\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "Divider.defaultProps = defaultProps;";

export const menu =
  'import React from "react";\n' +
  'import { MenuProps } from "antd/lib";\n' +
  'import { Menu as AntMenu } from "antd";\n' +
  "\n" +
  "interface Props {\n" +
  "    direction?: any;\n" +
  "    items?: any;\n" +
  "}\n" +
  "\n" +
  "const defaultProps = {\n" +
  '    direction: "horizontal",\n' +
  '    items: ["Item 1", "Item 2", "Item 3"],\n' +
  "};\n" +
  "\n" +
  "export const Menu = (props: Props) => {\n" +
  "    const { direction, items } = props;\n" +
  '    const menuItems: MenuProps["items"] = items?.map((item: any) => ({\n' +
  "        value: item,\n" +
  "        label: item,\n" +
  "    }));\n" +
  "    return (\n" +
  "        <div>\n" +
  "            <AntMenu mode={direction} items={menuItems} />\n" +
  "        </div>\n" +
  "    );\n" +
  "};\n" +
  "\n" +
  "Menu.defaultProps = defaultProps;\n";

export const select =
  'import React from "react";\n' +
  'import { Form, Select as AntSelect } from "antd";\n' +
  "\n" +
  "interface Props {\n" +
  "  placeholder?: string;\n" +
  "  label?: string;\n" +
  "  showLabel?: boolean;\n" +
  "  isVertical?: boolean;\n" +
  "  showPlaceHolder?: boolean;\n" +
  "  color?: string;\n" +
  "  showSearch?: boolean;\n" +
  "  items?: string[];\n" +
  "}\n" +
  "\n" +
  "const defaultProps = {\n" +
  '  placeholder: "Place holder",\n' +
  "  isVertical: true,\n" +
  "  showPlaceHolder: true,\n" +
  '  label: "Label",\n' +
  "  showLabel: true,\n" +
  '  color: "black",\n' +
  "  showSearch: false,\n" +
  '  items: ["Item 1", "Item 2", "Item 3"],\n' +
  "};\n" +
  "\n" +
  "export const Select = (props: Props) => {\n" +
  "  const {\n" +
  "    isVertical,\n" +
  "    showLabel,\n" +
  "    label,\n" +
  "    showPlaceHolder,\n" +
  "    placeholder,\n" +
  "    color,\n" +
  "    showSearch,\n" +
  "    items,\n" +
  "  } = props;\n" +
  "\n" +
  "  return (\n" +
  "    <div>\n" +
  "      <Form.Item>\n" +
  '        <div className={isVertical ? "" : "flex items-center"}>\n' +
  "          {showLabel && (\n" +
  '            <label className="mr-4 font-bold" style={{ color }}>\n' +
  "              {label}:\n" +
  "            </label>\n" +
  "          )}\n" +
  "          <AntSelect\n" +
  '            placeholder={showPlaceHolder ? placeholder : ""}\n' +
  "            showSearch={showSearch}\n" +
  "          >\n" +
  "            {items?.map((value) => (\n" +
  "              <AntSelect.Option key={value} value={value}>\n" +
  "                {value}\n" +
  "              </AntSelect.Option>\n" +
  "            ))}\n" +
  "          </AntSelect>\n" +
  "        </div>\n" +
  "      </Form.Item>\n" +
  "    </div>\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "Select.defaultProps = defaultProps;";

export const statistic =
  'import React from "react";\n' +
  'import { Statistic as AntStatistic } from "antd";\n' +
  "\n" +
  "interface Props {\n" +
  "    title: string;\n" +
  "    value: number;\n" +
  "}\n" +
  "\n" +
  "const defaultProps = {\n" +
  '    title: "Title",\n' +
  "    value: 100000,\n" +
  "};\n" +
  "\n" +
  "export const Statistic = (props: Props) => {\n" +
  "    const { title, value } = props;\n" +
  "\n" +
  "    return (\n" +
  "        <div>\n" +
  "            <AntStatistic title={title} value={value} />\n" +
  "        </div>\n" +
  "    );\n" +
  "};\n" +
  "\n" +
  "Statistic.defaultProps = defaultProps;\n";

export const switchTemplate =
  'import React from "react";\n' +
  'import { Switch as AntSwitch } from "antd";\n' +
  'import { SwitchSize } from "antd/es/switch";\n' +
  "\n" +
  "interface Props {\n" +
  "    label: string;\n" +
  "    showLabel: boolean;\n" +
  "    isVertical: boolean;\n" +
  "    defaultValue: boolean;\n" +
  "    isDisable: boolean;\n" +
  "    size: SwitchSize;\n" +
  "}\n" +
  "\n" +
  "const defaultProps = {\n" +
  '    label: "Label",\n' +
  "    showLabel: true,\n" +
  "    isVertical: false,\n" +
  "    defaultValue: false,\n" +
  "    isDisable: false,\n" +
  '    size: "default",\n' +
  "};\n" +
  "\n" +
  "export const Switch = (props: Props) => {\n" +
  "    const { label, showLabel, isVertical, defaultValue, isDisable, size } =\n" +
  "        props;\n" +
  "\n" +
  "    return (\n" +
  '        <div className={!isVertical ? "flex item-center gap-x-2" : ""}>\n' +
  "            {showLabel && <div>{label}</div>}\n" +
  "            <AntSwitch\n" +
  "                defaultChecked={defaultValue}\n" +
  "                disabled={isDisable}\n" +
  "                size={size}\n" +
  "            />\n" +
  "        </div>\n" +
  "    );\n" +
  "};\n" +
  "\n" +
  "Switch.defaultProps = defaultProps;\n";

export const tab =
  'import React from "react";\n' +
  'import { Tabs } from "antd";\n' +
  'import { Container } from "./Container";\n' +
  "\n" +
  "interface Props {\n" +
  "  tabs: string[];\n" +
  "  children?: React.ReactNode;\n" +
  "}\n" +
  "\n" +
  "const defaultProps = {\n" +
  '  tabs: ["Tab 1", "Tab 2"],\n' +
  "};\n" +
  "\n" +
  "export const Tab = (props: Props) => {\n" +
  "  const { tabs, children } = props;\n" +
  "\n" +
  "  return (\n" +
  "    <div>\n" +
  "      <Tabs>\n" +
  "        {tabs.map((tab, index) => (\n" +
  "          <Tabs.TabPane tab={tab} key={index}>\n" +
  "            <Container id={index.toString()}>\n" +
  "              {children}\n" +
  "            </Container>\n" +
  "          </Tabs.TabPane>\n" +
  "        ))}\n" +
  "      </Tabs>\n" +
  "    </div>\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "Tab.defaultProps = defaultProps;";
