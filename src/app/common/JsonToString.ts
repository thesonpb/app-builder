import {
  button,
  container,
  grid,
  input,
  paragraph,
  text,
} from "../constants/stringTemplate";

const STRING_TEMPLATE_OF_COMPONENTS: {
  [index: string]: string;
} = {
  Grid: grid,
  Container: container,
  Button: button,
  Input: input,
  Paragraph: paragraph,
  Text: text,
};

// dung de viet code vao tung file be'
export function convertNodeNameToCode(name: string) {
  return STRING_TEMPLATE_OF_COMPONENTS[name];
}

// dung de viet code vao file to
export function convertSerializeToString(serialize: any, nodeId: string) {
  const node = serialize[nodeId];
  let result = "";
  if (node) {
    result += `<${node.displayName} ${Object.keys(node.props)
      .map(
        (item: string) =>
          `${item}=${
            typeof node.props[item] === "string"
              ? `'${node.props[item]}'`
              : `{${node.props[item]}}`
          }`
      )
      ?.join(" ")}>`;
    for (const childId of node.nodes) {
      result += convertSerializeToString(serialize, childId);
    }
    result += `</${node.displayName}>`;
  }
  return result;
}
