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
  "                setProp((prop) => (prop.text = e.target.value), 500);\n" +
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
