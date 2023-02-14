import {
  button,
  container,
  grid,
  input,
  paragraph,
  text,
} from "../constants/stringTemplate";

interface Type {
  resolvedName: string;
}

interface NodeData {
  type: Type;
  isCanvas: boolean;
  props: object;
  displayName: string;
  custom?: object;
  hidden: boolean;
  nodes: string[];
  linkedNodes?: object;
  parent?: string;
}

const STRING_TEMPLATE_OF_COMPONENTS: {
  [index: string]: (json: any) => string;
} = {
  Grid: grid,
  Container: container,
  Button: button,
  Input: input,
  Paragraph: paragraph,
  Text: text,
};

// dung de viet code vao tung file be'
export function convertJsonToString(json: NodeData) {
  const func = STRING_TEMPLATE_OF_COMPONENTS[json.type.resolvedName];
  return func(json.props);
}

// dung de viet code vao file to
export function convertSerializeToString(nodeObjectsById: any, nodeId: string) {
  const node = nodeObjectsById[nodeId];
  let result = "";
  if (node) {
    result += `<${node.displayName}>`;
    for (const childId of node.nodes) {
      result += convertSerializeToString(nodeObjectsById, childId);
    }
    result += `</${node.displayName}>`;
  }
  return result;
}
