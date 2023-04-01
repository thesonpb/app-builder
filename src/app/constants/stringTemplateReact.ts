export const grid =
  'import React from "react";\n' +
  "\n" +
  "interface Props {\n" +
  "    isCol?: boolean;\n" +
  "    numCols?: string;\n" +
  "    numRows?: string;\n" +
  "    backgroundColor?: string;\n" +
  "    gap?: string;\n" +
  "    gapX?: string;\n" +
  "    gapY?: string;\n" +
  "    children: React.ReactNode;\n" +
  "    margin?: string;\n" +
  "    marginLeft?: string;\n" +
  "    marginRight?: string;\n" +
  "    marginTop?: string;\n" +
  "    marginBottom?: string;\n" +
  "    padding?: string;\n" +
  "    paddingLeft?: string;\n" +
  "    paddingRight?: string;\n" +
  "    paddingTop?: string;\n" +
  "    paddingBottom?: string;\n" +
  "    borderRadius?: string;\n" +
  "    borderTopLeftRadius?: string;\n" +
  "    borderTopRightRadius?: string;\n" +
  "    borderBottomLeftRadius?: string;\n" +
  "    borderBottomRightRadius?: string;\n" +
  "    height?: string;\n" +
  "    width?: string;\n" +
  "    minHeight?: string;\n" +
  "    minWidth?: string;\n" +
  "    borderWidth?: string;\n" +
  "    borderStyle?: string;\n" +
  "    borderColor?: string;\n" +
  "    maxWidth?: string;\n" +
  "    maxHeight?: string;\n" +
  "    className?: string;\n" +
  "    showBorder?: boolean;\n" +
  "}\n" +
  "\n" +
  "const defaultProps = {\n" +
  '    gap: "0",\n' +
  "    isCol: true,\n" +
  '    numCols: "2",\n' +
  '    numRows: "2",\n' +
  '    gapX: "0",\n' +
  '    gapY: "0",\n' +
  '    minHeight: "10rem",\n' +
  '    borderRadius: "16px",\n' +
  '    borderColor: "#f2f2f2",\n' +
  '    borderStyle: "solid",\n' +
  '    borderWidth: "1px",\n' +
  '    marginTop: "1rem",\n' +
  '    padding: "16px",\n' +
  '    backgroundColor: "white",\n' +
  "    showBorder: true,\n" +
  "    children: undefined,\n" +
  "};\n" +
  "\n" +
  "export const Grid = (props: Props) => {\n" +
  "    const {\n" +
  "        isCol,\n" +
  "        numCols,\n" +
  "        numRows,\n" +
  "        gapX,\n" +
  "        gapY,\n" +
  "        children,\n" +
  "        showBorder,\n" +
  "        padding,\n" +
  "        margin,\n" +
  "        borderRadius,\n" +
  "        paddingTop,\n" +
  "        paddingRight,\n" +
  "        paddingLeft,\n" +
  "        paddingBottom,\n" +
  "        marginTop,\n" +
  "        marginRight,\n" +
  "        marginLeft,\n" +
  "        marginBottom,\n" +
  "        borderBottomLeftRadius,\n" +
  "        borderBottomRightRadius,\n" +
  "        borderTopLeftRadius,\n" +
  "        borderTopRightRadius,\n" +
  "        borderWidth,\n" +
  "    } = props;\n" +
  "\n" +
  "    const layout = isCol\n" +
  "        ? {\n" +
  "              gridTemplateColumns: `repeat(${numCols}, minmax(0, 1fr))`,\n" +
  "          }\n" +
  "        : {\n" +
  "              gridTemplateRows: `repeat(${numRows}, minmax(0, 1fr))`,\n" +
  '              gridAutoFlow: "column",\n' +
  "          };\n" +
  "    return (\n" +
  "        <div\n" +
  '            className="grid"\n' +
  "            style={{\n" +
  "                ...props,\n" +
  "                ...layout,\n" +
  "                columnGap: `${gapX}px`,\n" +
  "                rowGap: `${gapY}px`,\n" +
  "                padding: `${padding}px`,\n" +
  "                paddingTop: `${paddingTop}px`,\n" +
  "                paddingBottom: `${paddingBottom}px`,\n" +
  "                paddingLeft: `${paddingLeft}px`,\n" +
  "                paddingRight: `${paddingRight}px`,\n" +
  "                margin: `${margin}px`,\n" +
  "                marginTop: `${marginTop}px`,\n" +
  "                marginBottom: `${marginBottom}px`,\n" +
  "                marginLeft: `${marginLeft}px`,\n" +
  "                marginRight: `${marginRight}px`,\n" +
  "                borderRadius: `${borderRadius}px`,\n" +
  "                borderTopLeftRadius: `${borderTopLeftRadius}px`,\n" +
  "                borderTopRightRadius: `${borderTopRightRadius}px`,\n" +
  "                borderBottomLeftRadius: `${borderBottomLeftRadius}px`,\n" +
  "                borderBottomRightRadius: `${borderBottomRightRadius}px`,\n" +
  '                borderWidth: showBorder ? `${borderWidth}px` : "0",\n' +
  "            }}\n" +
  "        >\n" +
  "            {children}\n" +
  "        </div>\n" +
  "    );\n" +
  "};\n" +
  "\n" +
  "Grid.defaultProps = defaultProps;\n";

export const container =
  'import React from "react";\n' +
  "\n" +
  "interface Props {\n" +
  "    backgroundColor?: string;\n" +
  "    width?: string;\n" +
  "    height?: string;\n" +
  "    borderRadius?: string;\n" +
  "    borderBottomLeftRadius?: string;\n" +
  "    borderBottomRightRadius?: string;\n" +
  "    borderTopLeftRadius?: string;\n" +
  "    borderTopRightRadius?: string;\n" +
  "    borderWidth?: string;\n" +
  "    borderStyle?: string;\n" +
  "    borderColor?: string;\n" +
  "    children?: React.ReactNode;\n" +
  "    padding?: string;\n" +
  "    paddingLeft?: string;\n" +
  "    paddingRight?: string;\n" +
  "    paddingTop?: string;\n" +
  "    paddingBottom?: string;\n" +
  "    margin?: string;\n" +
  "    marginLeft?: string;\n" +
  "    marginRight?: string;\n" +
  "    marginTop?: string;\n" +
  "    marginBottom?: string;\n" +
  "    minHeight?: string;\n" +
  "    minWidth?: string;\n" +
  "    maxWidth?: string;\n" +
  "    maxHeight?: string;\n" +
  "    className?: string;\n" +
  "}\n" +
  "\n" +
  "const defaultProps = {\n" +
  '    backgroundColor: "white",\n' +
  '    minHeight: "10rem",\n' +
  '    padding: "16px",\n' +
  '    borderRadius: "0",\n' +
  '    borderColor: "#f2f2f2",\n' +
  '    borderStyle: "solid",\n' +
  '    borderWidth: "1px",\n' +
  '    marginTop: "0",\n' +
  "};\n" +
  "\n" +
  "export const Container = (props: Props) => {\n" +
  "    const { className, children } = props;\n" +
  "    return (\n" +
  "        <div\n" +
  "            style={{\n" +
  "                ...props,\n" +
  "            }}\n" +
  "            className={className}\n" +
  "        >\n" +
  "            {children}\n" +
  "        </div>\n" +
  "    );\n" +
  "};\n" +
  "\n" +
  "Container.defaultProps = defaultProps;\n";

export const button =
  'import React from "react";\n' +
  'import { Button as AntButton } from "antd";\n' +
  'import { SizeType } from "antd/lib/config-provider/SizeContext";\n' +
  "declare const ButtonTypes: [\n" +
  '    "primary",\n' +
  '    "link",\n' +
  '    "text",\n' +
  '    "ghost",\n' +
  '    "default",\n' +
  '    "dashed",\n' +
  "    undefined\n" +
  "];\n" +
  "declare type ButtonType = typeof ButtonTypes[number];\n" +
  "\n" +
  "interface Props {\n" +
  "    size?: SizeType;\n" +
  "    type?: ButtonType;\n" +
  "    color?: string;\n" +
  "    text?: string;\n" +
  "    backgroundColor?: string;\n" +
  "}\n" +
  "\n" +
  "const defaultProps = {\n" +
  '    size: "middle",\n' +
  '    type: "primary",\n' +
  '    color: "",\n' +
  '    text: "Button",\n' +
  '    backgroundColor: "",\n' +
  "};\n" +
  "\n" +
  "export const Button = (props: Props) => {\n" +
  "    const { size, type, color, text, backgroundColor } = props;\n" +
  "\n" +
  "    return (\n" +
  "        <AntButton size={size} type={type} style={{ color, backgroundColor }}>\n" +
  "            {text}\n" +
  "        </AntButton>\n" +
  "    );\n" +
  "};\n" +
  "\n" +
  "Button.defaultProps = defaultProps;\n";

export const input =
  'import React from "react";\n' +
  'import { Form, Input as InputAntd } from "antd";\n' +
  "\n" +
  "interface Props {\n" +
  "    placeholder?: string;\n" +
  "    label?: string;\n" +
  "    showLabel?: boolean;\n" +
  "    isVertical?: boolean;\n" +
  "    showPlaceHolder?: boolean;\n" +
  "    color?: string;\n" +
  "    isPassword?: boolean;\n" +
  "}\n" +
  "\n" +
  "const defaultProps = {\n" +
  '    placeholder: "Place holder",\n' +
  "    isVertical: true,\n" +
  "    showPlaceHolder: true,\n" +
  '    label: "Label",\n' +
  "    showLabel: true,\n" +
  '    color: "black",\n' +
  "    isPassword: false,\n" +
  "};\n" +
  "\n" +
  "export const Input = (props: Props) => {\n" +
  "    const {\n" +
  "        isVertical,\n" +
  "        showLabel,\n" +
  "        label,\n" +
  "        showPlaceHolder,\n" +
  "        placeholder,\n" +
  "        color,\n" +
  "        isPassword,\n" +
  "    } = props;\n" +
  "    return (\n" +
  "        <div>\n" +
  "            <Form.Item>\n" +
  '                <div className={isVertical ? "" : "flex items-center"}>\n' +
  "                    {showLabel && (\n" +
  '                        <label className="mr-4 font-bold" style={{ color }}>\n' +
  "                            {label}:\n" +
  "                        </label>\n" +
  "                    )}\n" +
  "                    {isPassword ? (\n" +
  "                        <InputAntd.Password\n" +
  '                            placeholder={showPlaceHolder ? placeholder : ""}\n' +
  "                        />\n" +
  "                    ) : (\n" +
  "                        <InputAntd\n" +
  '                            placeholder={showPlaceHolder ? placeholder : ""}\n' +
  "                        />\n" +
  "                    )}\n" +
  "                </div>\n" +
  "            </Form.Item>\n" +
  "        </div>\n" +
  "    );\n" +
  "};\n" +
  "\n" +
  "Input.defaultProps = defaultProps;\n";

export const paragraph =
  'import React from "react";\n' +
  "\n" +
  "interface Props {\n" +
  "    text?: string;\n" +
  "    fontSize?: number;\n" +
  "    isBold?: boolean;\n" +
  "    isItalic?: boolean;\n" +
  "    isUnderline?: boolean;\n" +
  "}\n" +
  "\n" +
  "export const Paragraph = ({\n" +
  '    text = "Paragraph",\n' +
  "    fontSize,\n" +
  "    isBold,\n" +
  "    isItalic,\n" +
  "    isUnderline,\n" +
  "}: Props) => {\n" +
  "    return (\n" +
  "        <p\n" +
  '            className={`m-0 ${isBold ? "font-bold" : ""} ${\n' +
  '                isItalic ? "italic" : ""\n' +
  '            } ${isUnderline ? "underline" : ""} `}\n' +
  "            style={{ fontSize }}\n" +
  "        >\n" +
  "            {text}\n" +
  "        </p>\n" +
  "    );\n" +
  "};\n";

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
  'import { Image as AntImage } from "antd";\n' +
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
  "            <AntImage width={width} src={src} />\n" +
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

export const table =
  'import React from "react";\n' +
  'import { Table as TableAntd } from "antd";\n' +
  "\n" +
  "interface Column {\n" +
  "    title: string;\n" +
  "    dataIndex: string;\n" +
  "    key: string;\n" +
  "}\n" +
  "\n" +
  "interface Props {\n" +
  "    columns: Column[];\n" +
  "    dataSource: any[];\n" +
  "}\n" +
  "\n" +
  "const defaultProps: Props = {\n" +
  "    columns: [\n" +
  '        { title: "Column 1", dataIndex: "column1", key: "column1" },\n' +
  '        { title: "Column 2", dataIndex: "column2", key: "column2" },\n' +
  "    ],\n" +
  "    dataSource: [\n" +
  '        { column1: "Data 1-1", column2: "Data 1-2" },\n' +
  '        { column1: "Data 2-1", column2: "Data 2-2" },\n' +
  '        { column1: "Data 3-1", column2: "Data 3-2" },\n' +
  "    ],\n" +
  "};\n" +
  "\n" +
  "export const Table = (props: Props) => {\n" +
  "    const { columns, dataSource } = props;\n" +
  "\n" +
  "    return (\n" +
  "        <div>\n" +
  "            <TableAntd columns={columns} dataSource={dataSource} />\n" +
  "        </div>\n" +
  "    );\n" +
  "};\n" +
  "\n" +
  "Table.defaultProps = defaultProps;\n";

export const tag =
  'import React from "react";\n' +
  'import { Tag as TagAntd } from "antd";\n' +
  "\n" +
  "interface Props {\n" +
  "    text?: string;\n" +
  "    color?: string;\n" +
  "    closable?: boolean;\n" +
  "}\n" +
  "\n" +
  "const defaultProps = {\n" +
  '    text: "Tag",\n' +
  '    color: "#1A61AF",\n' +
  "    closable: true,\n" +
  "};\n" +
  "\n" +
  "export const Tag = (props: Props) => {\n" +
  "    const { text, color, closable } = props;\n" +
  "\n" +
  "    return (\n" +
  "        <TagAntd\n" +
  "            className={`py-1 px-2 rounded-lg inline-flex items-center`}\n" +
  "            color={color}\n" +
  "            closable={closable}\n" +
  "        >\n" +
  '            <span className="text-xs">{text}</span>\n' +
  "        </TagAntd>\n" +
  "    );\n" +
  "};\n" +
  "\n" +
  "Tag.defaultProps = defaultProps;\n";
