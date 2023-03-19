import {
  breadcrumbs,
  button,
  checkbox,
  container,
  datetimepicker,
  divider,
  grid,
  image,
  input,
  menu,
  paragraph,
  radiobox,
  select,
  statistic,
  switchTemplate,
  tab,
  table,
  tag,
  text,
} from "../constants/stringTemplateVue";
import * as JSZip from "jszip";
import * as FileSaver from "file-saver";

const STRING_TEMPLATE_OF_COMPONENTS: {
  [index: string]: string;
} = {
  Grid: grid,
  Container: container,
  Button: button,
  Input: input,
  Paragraph: paragraph,
  Text: text,
  Radiobox: radiobox,
  Checkbox: checkbox,
  DateTimePicker: datetimepicker,
  Breadcrumbs: breadcrumbs,
  Image: image,
  Divider: divider,
  Menu: menu,
  Select: select,
  Statistic: statistic,
  Switch: switchTemplate,
  Tab: tab,
  Table: table,
  Tag: tag,
};

export function exportVueCode(serialize: any, currentProjectName: any) {
  // Get code for each child component
  let displayNameArray = Object.values(JSON.parse(serialize))?.map(
    (item: any) => item.displayName
  );
  const set = new Set(displayNameArray);
  displayNameArray = [...set];

  let fileCode: File[] = [];
  let importStatement = '<script setup lang="ts">';
  displayNameArray?.forEach((item: string) => {
    // Get import statement for each child component
    if (item === "Tab") {
      importStatement += `\n import { Tabs } from "ant-design-vue";`;
    } else {
      importStatement += `\n import ${item} from './components/${item}.vue';`;
    }

    // Get code for each child component
    fileCode.push({
      name: `${item}.vue`,
      code: convertNodeNameToCode(item),
    });
  });
  importStatement += "</script>\n\n";

  // Get code for the parent component
  const returnStatement = `
    <template>
      ${convertSerializeToString(JSON.parse(serialize), "ROOT")}
    </template>
  `;

  downloadZipFile({
    importStatement,
    returnStatement,
    componentsList: fileCode,
    zipName: currentProjectName,
  });
}

// dung de viet code vao tung file be'
export function convertNodeNameToCode(name: string) {
  return STRING_TEMPLATE_OF_COMPONENTS[name];
}

// dung de viet code vao file to
export function convertSerializeToString(serialize: any, nodeId: string) {
  const node = serialize[nodeId];
  let result = "";
  if (node) {
    if (node.type.resolvedName === "Tab") {
      const tabs = node.props.tabs || [];
      const linkedNodes = node.linkedNodes || {};
      result += "<Tabs>";
      for (let i = 0; i < tabs.length; i++) {
        const tabId = linkedNodes[i.toString()];
        if (tabId) {
          result += `<Tabs.TabPane :tab="'${
            tabs[i]
          }'" :key="${i}">${convertSerializeToString(
            serialize,
            tabId
          )}</Tabs.TabPane>`;
        } else {
          result += `<Tabs.TabPane :tab="'${tabs[i]}'" :key="${i}"></Tabs.TabPane>`;
        }
      }
      result += "</Tabs>";
    } else if (node.type.resolvedName === "Table") {
      const { columns, dataSource } = node.props;
      result += `<Table`;
      if (columns && dataSource) {
        result += ` :columns="${JSON.stringify(columns).replace(
          /\"/g,
          "'"
        )}" :dataSource="${JSON.stringify(dataSource).replace(/\"/g, "'")}"`;
      }
      result += " />";
    } else {
      result += `<${node.displayName} ${Object.keys(node.props)
        .map((item) => {
          const propValue = node.props[item];
          if (Array.isArray(propValue)) {
            return `:${item}='[${propValue
              .map((val) => `"${val}"`)
              .join(", ")}]'`;
          } else if (typeof propValue === "boolean") {
            return `:${item}="${propValue ? "true" : "false"}"`;
          } else if (typeof propValue === "number") {
            return `:${item}="${propValue}"`;
          } else {
            const propStringValue =
              typeof propValue === "string"
                ? `'${propValue}'`
                : `{${propValue}}`;
            return `:${item}="${propStringValue}"`;
          }
        })
        .join(" ")}>`;
      for (const childId of node.nodes) {
        result += convertSerializeToString(serialize, childId);
      }
      result += `</${node.displayName}>`;
    }
  }
  return result;
}

export interface File {
  name: string;
  code: string;
}

interface Props {
  importStatement: string;
  returnStatement: string;
  zipName: string;
  componentsList: File[];
}
export function downloadZipFile({
  importStatement,
  returnStatement,
  componentsList,
  zipName,
}: Props): void {
  const zip = new JSZip();

  zip.file(
    "index.html",
    "<!DOCTYPE html>\n" +
      '<html lang="en">\n' +
      "  <head>\n" +
      '    <meta charset="UTF-8" />\n' +
      '    <link rel="icon" type="image/svg+xml" href="/vite.svg" />\n' +
      '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n' +
      "    <title>Component Craft</title>\n" +
      "  </head>\n" +
      "  <body>\n" +
      '    <div id="app"></div>\n' +
      '    <script type="module" src="/src/main.ts"></script>\n' +
      "  </body>\n" +
      "</html>\n"
  );
  zip.file(
    "README.md",
    "# VueJS-Typescript-Vite\n" +
      "\n" +
      "This project is exported from your project on ComponentCraft.\n" +
      "\n" +
      "## Project Setup\n" +
      "\n" +
      "```sh\n" +
      "npm install\n" +
      "```\n" +
      "\n" +
      "### Compile and Hot-Reload for Development\n" +
      "\n" +
      "```sh\n" +
      "npm run dev\n" +
      "```\n" +
      "\n" +
      "### Compile and Minify for Production\n" +
      "\n" +
      "```sh\n" +
      "npm run build\n" +
      "```\n"
  );
  zip.file(
    "package.json",
    "{\n" +
      '  "name": "component-craft",\n' +
      '  "private": true,\n' +
      '  "version": "0.0.0",\n' +
      '  "type": "module",\n' +
      '  "scripts": {\n' +
      '    "dev": "vite",\n' +
      '    "build": "vue-tsc && vite build",\n' +
      '    "preview": "vite preview"\n' +
      "  },\n" +
      '  "dependencies": {\n' +
      '    "vue": "^3.2.47"\n' +
      "  },\n" +
      '  "devDependencies": {\n' +
      '    "@vitejs/plugin-vue": "^4.1.0",\n' +
      '    "ant-design-vue": "^3.2.15",\n' +
      '    "autoprefixer": "^10.4.14",\n' +
      '    "postcss": "^8.4.21",\n' +
      '    "tailwindcss": "^3.2.7",\n' +
      '    "typescript": "^4.9.3",\n' +
      '    "vite": "^4.2.0",\n' +
      '    "vue-tsc": "^1.2.0"\n' +
      "  }\n" +
      "}\n"
  );
  zip.file(
    "postcss.config.cjs",
    "module.exports = {\n" +
      "  plugins: {\n" +
      "    tailwindcss: {},\n" +
      "    autoprefixer: {},\n" +
      "  },\n" +
      "}\n"
  );
  zip.file(
    "tailwind.config.cjs",
    "/** @type {import('tailwindcss').Config} */\n" +
      "module.exports = {\n" +
      "    important: true,\n" +
      "    corePlugins: {\n" +
      "        preflight: false,\n" +
      "    },\n" +
      '    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],\n' +
      "    theme: {\n" +
      "        extend: {\n" +
      "            colors: {\n" +
      "                dark: '#343a40',\n" +
      "                lightGray: '#495057',\n" +
      "                light: '#e9ecef',\n" +
      "                textDark: '#212529',\n" +
      "                textLight: '#f8f9fa',\n" +
      "                border: '#525866',\n" +
      "                editor: '#dee2e6',\n" +
      "                greenest: '#2d9d78'\n" +
      "            }\n" +
      "        },\n" +
      "    },\n" +
      "    plugins: [],\n" +
      "};\n"
  );
  zip.file(
    "tsconfig.json",
    "{\n" +
      '    "compilerOptions": {\n' +
      '        "target": "ESNext",\n' +
      '        "useDefineForClassFields": true,\n' +
      '        "module": "ESNext",\n' +
      '        "moduleResolution": "Node",\n' +
      '        "strict": true,\n' +
      '        "jsx": "preserve",\n' +
      '        "resolveJsonModule": true,\n' +
      '        "isolatedModules": true,\n' +
      '        "esModuleInterop": true,\n' +
      '        "lib": ["ESNext", "DOM"],\n' +
      '        "skipLibCheck": true,\n' +
      '        "noEmit": true,\n' +
      '        "types": ["vite/client", "vue"]\n' +
      "    },\n" +
      '    "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],\n' +
      '    "references": [{ "path": "./tsconfig.node.json" }]\n' +
      "}\n"
  );
  zip.file(
    "tsconfig.node.json",
    "{\n" +
      '  "compilerOptions": {\n' +
      '    "composite": true,\n' +
      '    "module": "ESNext",\n' +
      '    "moduleResolution": "Node",\n' +
      '    "allowSyntheticDefaultImports": true\n' +
      "  },\n" +
      '  "include": ["vite.config.ts"]\n' +
      "}\n"
  );
  zip.file(
    "vite.config.ts",
    "import { defineConfig } from 'vite'\n" +
      "import vue from '@vitejs/plugin-vue'\n" +
      "\n" +
      "// https://vitejs.dev/config/\n" +
      "export default defineConfig({\n" +
      "  plugins: [vue()],\n" +
      "})\n"
  );
  zip.file(
    ".gitignore",
    "# Logs\n" +
      "logs\n" +
      "*.log\n" +
      "npm-debug.log*\n" +
      "yarn-debug.log*\n" +
      "yarn-error.log*\n" +
      "pnpm-debug.log*\n" +
      "lerna-debug.log*\n" +
      "\n" +
      "node_modules\n" +
      "dist\n" +
      "dist-ssr\n" +
      "*.local\n" +
      "\n" +
      "# Editor directories and files\n" +
      ".vscode/*\n" +
      "!.vscode/extensions.json\n" +
      ".idea\n" +
      ".DS_Store\n" +
      "*.suo\n" +
      "*.ntvs*\n" +
      "*.njsproj\n" +
      "*.sln\n" +
      "*.sw?\n"
  );
  const publicFolder = zip.folder("public");
  if (publicFolder !== null) {
    publicFolder.file(
      "vite.svg",
      '<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000" preserveAspectRatio="xMidYMid meet">\n' +
        "\n" +
        '    <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">\n' +
        '        <path d="M88 214 c-21 -11 -28 -22 -28 -44 0 -23 -7 -33 -30 -45 -25 -13 -30 -22 -30 -51 0 -30 5 -37 32 -49 28 -11 37 -11 60 1 24 13 32 13 56 0 23 -12 32 -12 60 -1 27 12 32 19 32 49 0 29 -5 38 -30 51 -23 12 -30 22 -30 45 0 23 -7 33 -30 45 -34 18 -28 18 -62 -1z m57 -14 c8 -13 -20 -24 -41 -16 -20 8 -9 26 16 26 10 0 22 -5 25 -10z m-51 -26 c9 -3 16 -17 16 -30 0 -22 -3 -23 -20 -14 -11 6 -20 20 -20 30 0 22 1 23 24 14z m76 -14 c0 -10 -9 -24 -20 -30 -17 -9 -20 -8 -20 14 0 22 10 33 33 35 4 1 7 -8 7 -19z m-75 -49 c7 -12 -28 -23 -49 -15 -9 3 -13 10 -10 15 7 12 51 12 59 0z m110 0 c7 -12 -28 -23 -49 -15 -9 3 -13 10 -10 15 7 12 51 12 59 0z m-155 -36 c6 -8 10 -20 8 -28 -5 -23 -48 -2 -48 23 0 23 22 27 40 5z m60 -5 c0 -10 -9 -24 -20 -30 -17 -9 -20 -8 -20 14 0 22 10 33 33 35 4 1 7 -8 7 -19z m44 14 c9 -3 16 -17 16 -30 0 -22 -3 -23 -20 -14 -11 6 -20 20 -20 30 0 22 1 23 24 14z m76 -14 c0 -25 -43 -46 -48 -23 -4 18 16 43 34 43 8 0 14 -9 14 -20z"/>\n' +
        "    </g>\n" +
        "</svg>"
    );
  }
  const srcFolder = zip.folder("src");
  if (srcFolder !== null) {
    srcFolder.file("vite-env.d.ts", '/// <reference types="vite/client" />\n');
    srcFolder.file(
      "main.ts",
      'import { createApp } from "vue";\n' +
        'import "ant-design-vue/dist/antd.css";\n' +
        'import "./style.css";\n' +
        'import App from "./App.vue";\n' +
        "\n" +
        'createApp(App).mount("#app");\n'
    );
    srcFolder.file(
      "style.css",
      "body {\n" +
        "    margin: 0;\n" +
        "    padding: 0;\n" +
        '    font-family: "Open Sans", sans-serif;\n' +
        "}\n" +
        "\n" +
        "@tailwind base;\n" +
        "@tailwind components;\n" +
        "@tailwind utilities;"
    );
    srcFolder.file("App.vue", importStatement + returnStatement);
    const components = srcFolder.folder("components");
    componentsList?.forEach((item: File) => {
      if (components !== null) {
        components.file(item.name, item.code);
      }
    });
  }

  // Generate the zip file and download it
  zip.generateAsync({ type: "blob" }).then(function (blob) {
    FileSaver.saveAs(blob, `${zipName}.zip`);
  });
}
