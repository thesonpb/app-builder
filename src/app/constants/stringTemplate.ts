export function grid({
  numCols,
  numRows,
  gapX,
  gapY,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderWidth,
}: any) {
  return `
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
        gridTemplateColumns: 'repeat(${numCols}, minmax(0, 1fr))',
      }
    : {
        gridTemplateRows: 'repeat(${numRows}, minmax(0, 1fr))',
        gridAutoFlow: "column",
      };
  return (
    <div
      className="grid"
      style={{
        ...props,
        ...layout,
        columnGap: '${gapX}px',
        rowGap: '${gapY}px',
        padding: '${padding}px',
        paddingTop: '${paddingTop}px',
        paddingBottom: '${paddingBottom}px',
        paddingLeft: '${paddingLeft}px',
        paddingRight: '${paddingRight}px',
        margin: '${margin}px',
        marginTop: '${marginTop}px',
        marginBottom: '${marginBottom}px',
        marginLeft: '${marginLeft}px',
        marginRight: '${marginRight}px',
        borderRadius: '${borderRadius}px',
        borderTopLeftRadius: '${borderTopLeftRadius}px',
        borderTopRightRadius: '${borderTopRightRadius}px',
        borderBottomLeftRadius: '${borderBottomLeftRadius}px',
        borderBottomRightRadius: '${borderBottomRightRadius}px',
        borderWidth: showBorder ? '${borderWidth}px' : "0",
      }}
    >
      {children}
    </div>
  );
};

Grid.defaultProps = defaultProps;
`;
}

export function container() {
  return `
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
}
export function button() {
  return `
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
}

export function input() {
  return `
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
}

export function paragraph({ isBold, isItalic, isUnderline }: any) {
  return `
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
     
      className='m-0 ${isBold ? "font-bold" : ""} ${isItalic ? "italic" : ""} ${
    isUnderline ? "underline" : ""
  }'
      style={{ fontSize }}
    >
      {text}
    </p>
  );
};
  `;
}

export function text({ isBold, isItalic, isUnderline }: any) {
  return `
import React from "react";
import ContentEditable from "react-contenteditable";

interface Props {
  text?: string;
  fontSize?: number;
  isBold?: boolean;
  isItalic?: boolean;
  isUnderline?: boolean;
  textAlign?: string;
  color?: string;
}

const defaultProps = {
  text: "Text",
  fontSize: 16,
  isBold: false,
  isItalic: false,
  isUnderline: false,
  textAlign: "left",
  color: "black",
};

export const Text = (props: Props) => {
  const { text, fontSize, isBold, isItalic, isUnderline, textAlign, color } =
    props;

  return (
    <ContentEditable
      html={text || ""}
      disabled={!enabled}
      onChange={(e) => {
        setProp((prop) => (prop.text = e.target.value), 500);
      }}
      tagName="div"
      className='mt-4 mb-0 ${isBold ? "font-bold" : ""} ${
    isItalic ? "italic" : ""
  } ${isUnderline ? "underline" : ""} '
      style={{ fontSize, textAlign, color }}
    />
  );
};

Text.defaultProps = defaultProps;
  `;
}
