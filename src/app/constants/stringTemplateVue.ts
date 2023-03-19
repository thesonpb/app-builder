export const grid =
  "<template>\n" +
  '  <div class="grid" :style="gridStyles">\n' +
  "    <slot></slot>\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "export default {\n" +
  '  name: "Grid",\n' +
  "  props: {\n" +
  "    isCol: {\n" +
  "      type: Boolean,\n" +
  "      default: true,\n" +
  "    },\n" +
  "    numCols: {\n" +
  "      type: String,\n" +
  '      default: "2",\n' +
  "    },\n" +
  "    numRows: {\n" +
  "      type: String,\n" +
  '      default: "2",\n' +
  "    },\n" +
  "    backgroundColor: {\n" +
  "      type: String,\n" +
  '      default: "white",\n' +
  "    },\n" +
  "    gap: {\n" +
  "      type: String,\n" +
  '      default: "0",\n' +
  "    },\n" +
  "    gapX: {\n" +
  "      type: String,\n" +
  '      default: "0",\n' +
  "    },\n" +
  "    gapY: {\n" +
  "      type: String,\n" +
  '      default: "0",\n' +
  "    },\n" +
  "    margin: {\n" +
  "      type: String,\n" +
  '      default: "0",\n' +
  "    },\n" +
  "    marginLeft: {\n" +
  "      type: String,\n" +
  '      default: "0",\n' +
  "    },\n" +
  "    marginRight: {\n" +
  "      type: String,\n" +
  '      default: "0",\n' +
  "    },\n" +
  "    marginTop: {\n" +
  "      type: String,\n" +
  '      default: "0",\n' +
  "    },\n" +
  "    marginBottom: {\n" +
  "      type: String,\n" +
  '      default: "0",\n' +
  "    },\n" +
  "    padding: {\n" +
  "      type: String,\n" +
  '      default: "0",\n' +
  "    },\n" +
  "    paddingLeft: {\n" +
  "      type: String,\n" +
  '      default: "0",\n' +
  "    },\n" +
  "    paddingRight: {\n" +
  "      type: String,\n" +
  '      default: "0",\n' +
  "    },\n" +
  "    paddingTop: {\n" +
  "      type: String,\n" +
  '      default: "0",\n' +
  "    },\n" +
  "    paddingBottom: {\n" +
  "      type: String,\n" +
  '      default: "0",\n' +
  "    },\n" +
  "    borderRadius: {\n" +
  "      type: String,\n" +
  '      default: "1rem",\n' +
  "    },\n" +
  "    borderTopLeftRadius: {\n" +
  "      type: String,\n" +
  '      default: "0",\n' +
  "    },\n" +
  "    borderTopRightRadius: {\n" +
  "      type: String,\n" +
  '      default: "0",\n' +
  "    },\n" +
  "    borderBottomLeftRadius: {\n" +
  "      type: String,\n" +
  '      default: "0",\n' +
  "    },\n" +
  "    borderBottomRightRadius: {\n" +
  "      type: String,\n" +
  '      default: "0",\n' +
  "    },\n" +
  "    height: {\n" +
  "      type: String,\n" +
  '      default: "auto",\n' +
  "    },\n" +
  "    width: {\n" +
  "      type: String,\n" +
  '      default: "auto",\n' +
  "    },\n" +
  "    minHeight: {\n" +
  "      type: String,\n" +
  '      default: "10rem",\n' +
  "    },\n" +
  "    minWidth: {\n" +
  "      type: String,\n" +
  '      default: "0",\n' +
  "    },\n" +
  "    borderWidth: {\n" +
  "      type: String,\n" +
  '      default: "1px",\n' +
  "    },\n" +
  "    borderStyle: {\n" +
  "      type: String,\n" +
  '      default: "solid",\n' +
  "    },\n" +
  "    borderColor: {\n" +
  "      type: String,\n" +
  '      default: "#f2f2f2",\n' +
  "    },\n" +
  "    maxWidth: {\n" +
  "      type: String,\n" +
  '      default: "none",\n' +
  "    },\n" +
  "    maxHeight: {\n" +
  "      type: String,\n" +
  '      default: "none",\n' +
  "    },\n" +
  "    className: {\n" +
  "      type: String,\n" +
  '      default: "",\n' +
  "    },\n" +
  "    showBorder: {\n" +
  "      type: Boolean,\n" +
  "      default: true,\n" +
  "    },\n" +
  "  },\n" +
  "  computed: {\n" +
  "    layout() {\n" +
  "      return this.isCol ? {\n" +
  "        gridTemplateColumns: `repeat(${this.numCols}, minmax(0, 1fr))`\n" +
  "      } : {\n" +
  "        gridTemplateRows: `repeat(${this.numRows}, minmax(0, 1fr))`,\n" +
  '        gridAutoFlow: "column"\n' +
  "      };\n" +
  "    },\n" +
  "    gridStyles() {\n" +
  "      return {\n" +
  "        ...this.$props,\n" +
  "        ...this.layout,\n" +
  "        columnGap: `${this.gapX}px`,\n" +
  "        rowGap: `${this.gapY}px`,\n" +
  "        padding: `${this.padding}px`,\n" +
  "        paddingTop: `${this.paddingTop}px`,\n" +
  "        paddingBottom: `${this.paddingBottom}px`,\n" +
  "        paddingLeft: `${this.paddingLeft}px`,\n" +
  "        paddingRight: `${this.paddingRight}px`,\n" +
  "        margin: `${this.margin}px`,\n" +
  "        marginTop: `${this.marginTop}px`,\n" +
  "        marginBottom: `${this.marginBottom}px`,\n" +
  "        marginLeft: `${this.marginLeft}px`,\n" +
  "        marginRight: `${this.marginRight}px`,\n" +
  "        borderRadius: `${this.borderRadius}px`,\n" +
  "        borderTopLeftRadius: `${this.borderTopLeftRadius}px`,\n" +
  "        borderTopRightRadius: `${this.borderTopRightRadius}px`,\n" +
  "        borderBottomLeftRadius: `${this.borderBottomLeftRadius}px`,\n" +
  "        borderBottomRightRadius: `${this.borderBottomRightRadius}px`,\n" +
  '        borderWidth: this.showBorder ? `${this.borderWidth}px` : "0"\n' +
  "      };\n" +
  "    }\n" +
  "  }}\n" +
  "</script>";

export const container =
  "<template>\n" +
  '  <div :style="{\n' +
  "    backgroundColor: backgroundColor,\n" +
  "    width: width,\n" +
  "    height: height,\n" +
  "    borderRadius: borderRadius,\n" +
  "    borderBottomLeftRadius: borderBottomLeftRadius,\n" +
  "    borderBottomRightRadius: borderBottomRightRadius,\n" +
  "    borderTopLeftRadius: borderTopLeftRadius,\n" +
  "    borderTopRightRadius: borderTopRightRadius,\n" +
  "    borderWidth: borderWidth,\n" +
  "    borderStyle: borderStyle,\n" +
  "    borderColor: borderColor,\n" +
  "    padding: padding,\n" +
  "    paddingLeft: paddingLeft,\n" +
  "    paddingRight: paddingRight,\n" +
  "    paddingTop: paddingTop,\n" +
  "    paddingBottom: paddingBottom,\n" +
  "    margin: margin,\n" +
  "    marginLeft: marginLeft,\n" +
  "    marginRight: marginRight,\n" +
  "    marginTop: marginTop,\n" +
  "    marginBottom: marginBottom,\n" +
  "    minHeight: minHeight,\n" +
  "    minWidth: minWidth,\n" +
  "    maxWidth: maxWidth,\n" +
  "    maxHeight: maxHeight,\n" +
  '  }" :class="className">\n' +
  "    <slot></slot>\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "export default {\n" +
  "  name: 'Container',\n" +
  "  props: {\n" +
  "    backgroundColor: {\n" +
  "      type: String,\n" +
  "      default: 'white',\n" +
  "    },\n" +
  "    width: String,\n" +
  "    height: String,\n" +
  "    borderRadius: String,\n" +
  "    borderBottomLeftRadius: String,\n" +
  "    borderBottomRightRadius: String,\n" +
  "    borderTopLeftRadius: String,\n" +
  "    borderTopRightRadius: String,\n" +
  "    borderWidth: String,\n" +
  "    borderStyle: {\n" +
  "      type: String,\n" +
  "      default: 'solid',\n" +
  "    },\n" +
  "    borderColor: {\n" +
  "      type: String,\n" +
  "      default: '#f2f2f2',\n" +
  "    },\n" +
  "    padding: String,\n" +
  "    paddingLeft: String,\n" +
  "    paddingRight: String,\n" +
  "    paddingTop: String,\n" +
  "    paddingBottom: String,\n" +
  "    margin: String,\n" +
  "    marginLeft: String,\n" +
  "    marginRight: String,\n" +
  "    marginTop: String,\n" +
  "    marginBottom: String,\n" +
  "    minHeight: {\n" +
  "      type: String,\n" +
  "      default: '10rem',\n" +
  "    },\n" +
  "    minWidth: String,\n" +
  "    maxWidth: String,\n" +
  "    maxHeight: String,\n" +
  "    className: String,\n" +
  "  },\n" +
  "  computed: {\n" +
  "    styles() {\n" +
  "      return {\n" +
  "        backgroundColor: this.backgroundColor,\n" +
  "        width: this.width,\n" +
  "        height: this.height,\n" +
  "        borderRadius: this.borderRadius,\n" +
  "        borderBottomLeftRadius: this.borderBottomLeftRadius,\n" +
  "        borderBottomRightRadius: this.borderBottomRightRadius,\n" +
  "        borderTopLeftRadius: this.borderTopLeftRadius,\n" +
  "        borderTopRightRadius: this.borderTopRightRadius,\n" +
  "        borderWidth: this.borderWidth,\n" +
  "        borderStyle: this.borderStyle,\n" +
  "        borderColor: this.borderColor,\n" +
  "        padding: this.padding,\n" +
  "        paddingLeft: this.paddingLeft,\n" +
  "        paddingRight: this.paddingRight,\n" +
  "        paddingTop: this.paddingTop,\n" +
  "        paddingBottom: this.paddingBottom,\n" +
  "        margin: this.margin,\n" +
  "        marginLeft: this.marginLeft,\n" +
  "        marginRight: this.marginRight,\n" +
  "        marginTop: this.marginTop,\n" +
  "        marginBottom: this.marginBottom,\n" +
  "        minHeight: this.minHeight,\n" +
  "        minWidth: this.minWidth,\n" +
  "        maxWidth: this.maxWidth,\n" +
  "        maxHeight: this.maxHeight,\n" +
  "      };\n" +
  "    },\n" +
  "  },\n" +
  "};\n" +
  "</script>\n";

export const breadcrumbs =
  "<template>\n" +
  "  <div>\n" +
  "    <a-breadcrumb>\n" +
  '      <a-breadcrumb-item v-for="item in listOption" :key="item">\n' +
  "        {{ item }}\n" +
  "      </a-breadcrumb-item>\n" +
  "    </a-breadcrumb>\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  'import {Breadcrumb} from "ant-design-vue";\n' +
  "\n" +
  "export default {\n" +
  '  name: "Breadcrumbs",\n' +
  "  components: {\n" +
  "    ABreadcrumb: Breadcrumb,\n" +
  "    ABreadcrumbItem: Breadcrumb.Item,\n" +
  "  },\n" +
  "  props: {\n" +
  "    listOption: {\n" +
  "      type: Array,\n" +
  '      default: () => ["Home", "Application Center", "Application List", "An Application"],\n' +
  "    },\n" +
  "  },\n" +
  "};\n" +
  "</script>\n";

export const button =
  "<template>\n" +
  "  <AntButton\n" +
  '      :size="size"\n' +
  '      :type="type"\n' +
  '      :style="{ color, backgroundColor }"\n' +
  "  >\n" +
  "    {{ text }}\n" +
  "  </AntButton>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "import {defineComponent} from 'vue';\n" +
  "import {Button as AntButton} from 'ant-design-vue';\n" +
  "\n" +
  "\n" +
  "export default defineComponent({\n" +
  "  name: 'Button',\n" +
  "  components: {AntButton},\n" +
  "  props: {\n" +
  "    size: {type: String, default: 'middle'},\n" +
  "    type: {type: String, default: 'primary'},\n" +
  "    color: {type: String, default: ''},\n" +
  "    text: {type: String, default: 'alo'},\n" +
  "    backgroundColor: {type: String, default: ''}\n" +
  "  },\n" +
  "});\n" +
  "</script>\n";

export const checkbox =
  "<template>\n" +
  "  <div>\n" +
  "    <Form.Item>\n" +
  "      <div>\n" +
  '        <template v-if="showTitle">\n' +
  '          <label class="mr-4" :class="{ \'font-bold\': isBold }">{{ title }}</label>\n' +
  "        </template>\n" +
  "        <Space :direction=\"isVertical ? 'vertical' : 'horizontal'\">\n" +
  '          <template v-for="(option, index) in listOption" :key="index">\n' +
  '            <AntCheckbox :value="option">{{ option }}</AntCheckbox>\n' +
  "          </template>\n" +
  "        </Space>\n" +
  "      </div>\n" +
  "    </Form.Item>\n" +
  "  </div>\n" +
  "</template>\n" +
  "<script>\n" +
  'import {Form, Space, Checkbox as AntCheckbox} from "ant-design-vue";\n' +
  "\n" +
  "export default {\n" +
  '  name: "Checkbox",\n' +
  "  components: {\n" +
  "    Form,\n" +
  "    Space,\n" +
  "    AntCheckbox,\n" +
  "  },\n" +
  "  props: {\n" +
  "    title: {\n" +
  "      type: String,\n" +
  '      default: "Title",\n' +
  "    },\n" +
  "    listOption: {\n" +
  "      type: Array,\n" +
  '      default: () => ["Option 1", "Option 2"],\n' +
  "    },\n" +
  "    isVertical: {\n" +
  "      type: Boolean,\n" +
  "      default: true,\n" +
  "    },\n" +
  "    showTitle: {\n" +
  "      type: Boolean,\n" +
  "      default: true,\n" +
  "    },\n" +
  "    isBold: {\n" +
  "      type: Boolean,\n" +
  "      default: false,\n" +
  "    },\n" +
  "  },\n" +
  "};\n" +
  "</script>";

export const datetimepicker =
  "<template>\n" +
  "  <div>\n" +
  "    <DatePicker v-if=\"!type || type === 'date'\"/>\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "import {DatePicker} from 'ant-design-vue';\n" +
  "\n" +
  "export default {\n" +
  "  name: 'DateTimePicker',\n" +
  "  components: {\n" +
  "    DatePicker\n" +
  "  },\n" +
  "  props: {\n" +
  "    type: {\n" +
  "      type: String,\n" +
  "      default: 'date',\n" +
  "    },\n" +
  "    value: {\n" +
  "      type: Date,\n" +
  "    },\n" +
  "  },\n" +
  "};\n" +
  "</script>\n";

export const divider =
  "<template>\n" +
  "  <div>\n" +
  "    <AntDivider\n" +
  '        :type="direction"\n' +
  '        :plain="showText"\n' +
  '        :orientation="align"\n' +
  "    >\n" +
  "      {{ text }}\n" +
  "    </AntDivider>\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  'import {Divider as AntDivider} from "ant-design-vue";\n' +
  "\n" +
  "export default {\n" +
  "  name: 'Divider',\n" +
  "  components: {AntDivider},\n" +
  "  props: {\n" +
  "    direction: {\n" +
  "      type: String,\n" +
  "      default: 'horizontal',\n" +
  "    },\n" +
  "    showText: {\n" +
  "      type: Boolean,\n" +
  "      default: false,\n" +
  "    },\n" +
  "    text: {\n" +
  "      type: String,\n" +
  "      default: '',\n" +
  "    },\n" +
  "    align: {\n" +
  "      type: String,\n" +
  "      default: undefined,\n" +
  "    },\n" +
  "  },\n" +
  "};\n" +
  "</script>\n";

export const image =
  "<template>\n" +
  "  <div>\n" +
  '    <img alt="image" :src="src" :width="width"/>\n' +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "export default {\n" +
  "  name: 'Image',\n" +
  "  props: {\n" +
  "    src: {\n" +
  "      type: String,\n" +
  "      default: 'https://picsum.photos/200',\n" +
  "    },\n" +
  "    width: {\n" +
  "      type: Number,\n" +
  "      default: 200,\n" +
  "    },\n" +
  "  },\n" +
  "};\n" +
  "</script>\n";

export const input =
  "<template>\n" +
  "  <div>\n" +
  "    <a-form-item>\n" +
  "      <div :class=\"[isVertical ? '' : 'flex items-center']\">\n" +
  '        <label v-if="showLabel" class="mr-4 font-bold" :style="{color: color}">{{ label }}:</label>\n' +
  "        <a-input\n" +
  '            v-if="!isPassword"\n' +
  "            :placeholder=\"showPlaceHolder ? placeholder : ''\"\n" +
  "        />\n" +
  "        <a-input-password\n" +
  "            v-else\n" +
  "            :placeholder=\"showPlaceHolder ? placeholder : ''\"\n" +
  "        />\n" +
  "      </div>\n" +
  "    </a-form-item>\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "import {Form, Input as AntdInput} from 'ant-design-vue'\n" +
  "\n" +
  "export default {\n" +
  "  name: 'Input',\n" +
  "  components: {\n" +
  "    'a-form-item': Form.Item,\n" +
  "    'a-input': AntdInput,\n" +
  "    'a-input-password': AntdInput.Password,\n" +
  "  },\n" +
  "  props: {\n" +
  "    placeholder: {\n" +
  "      type: String,\n" +
  "      default: 'Place holder',\n" +
  "    },\n" +
  "    label: {\n" +
  "      type: String,\n" +
  "      default: 'Label',\n" +
  "    },\n" +
  "    showLabel: {\n" +
  "      type: Boolean,\n" +
  "      default: true,\n" +
  "    },\n" +
  "    isVertical: {\n" +
  "      type: Boolean,\n" +
  "      default: true,\n" +
  "    },\n" +
  "    showPlaceHolder: {\n" +
  "      type: Boolean,\n" +
  "      default: true,\n" +
  "    },\n" +
  "    color: {\n" +
  "      type: String,\n" +
  "      default: 'black',\n" +
  "    },\n" +
  "    isPassword: {\n" +
  "      type: Boolean,\n" +
  "      default: false,\n" +
  "    },\n" +
  "  },\n" +
  "}\n" +
  "</script>\n";

export const menu =
  "<template>\n" +
  "  <div>\n" +
  '    <AntMenu :mode="direction">\n' +
  '      <Item v-for="item in items" :key="item">\n' +
  "        {{ item }}\n" +
  "      </Item>\n" +
  "    </AntMenu>\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  'import {Menu as AntMenu} from "ant-design-vue";\n' +
  "\n" +
  "export default {\n" +
  '  name: "Menu",\n' +
  "  components: {AntMenu, Item: AntMenu.Item},\n" +
  "  props: {\n" +
  "    direction: {\n" +
  "      type: String,\n" +
  '      default: "horizontal",\n' +
  "    },\n" +
  "    items: {\n" +
  "      type: Array,\n" +
  '      default: () => ["Item 1", "Item 2", "Item 3"],\n' +
  "    },\n" +
  "  },\n" +
  "  computed: {\n" +
  "    menuItems() {\n" +
  "      return this.items.map((item) => ({\n" +
  "        value: item,\n" +
  "        label: item,\n" +
  "      }));\n" +
  "    },\n" +
  "  },\n" +
  "}\n" +
  "</script>\n";

export const paragraph =
  "<template>\n" +
  "  <p :class=\"['m-0', isBold ? 'font-bold' : '', isItalic ? 'italic' : '', isUnderline ? 'underline' : '']\"\n" +
  '     :style="{ fontSize }">{{ text }}</p>\n' +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "export default {\n" +
  "  props: {\n" +
  "    text: {\n" +
  "      type: String,\n" +
  '      default: "Paragraph"\n' +
  "    },\n" +
  "    fontSize: {\n" +
  "      type: Number,\n" +
  "      default: 16\n" +
  "    },\n" +
  "    isBold: {\n" +
  "      type: Boolean,\n" +
  "      default: false\n" +
  "    },\n" +
  "    isItalic: {\n" +
  "      type: Boolean,\n" +
  "      default: false\n" +
  "    },\n" +
  "    isUnderline: {\n" +
  "      type: Boolean,\n" +
  "      default: false\n" +
  "    }\n" +
  "  }\n" +
  "};\n" +
  "</script>\n";

export const radiobox =
  "<template>\n" +
  "  <div>\n" +
  "    <Form.Item>\n" +
  "      <div>\n" +
  '        <template v-if="showTitle">\n' +
  '          <label class="mr-4" :class="{ \'font-bold\': isBold }">{{ title }}</label>\n' +
  "        </template>\n" +
  "        <Space :direction=\"isVertical ? 'vertical' : 'horizontal'\">\n" +
  '          <template v-for="(option, index) in listOption" :key="index">\n' +
  '            <Radio :value="option">{{ option }}</Radio>\n' +
  "          </template>\n" +
  "        </Space>\n" +
  "      </div>\n" +
  "    </Form.Item>\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  'import {Form, Radio, Space} from "ant-design-vue";\n' +
  "\n" +
  "export default {\n" +
  '  name: "Radiobox",\n' +
  "  components: {\n" +
  "    Form,\n" +
  "    Radio,\n" +
  "    Space,\n" +
  "  },\n" +
  "  props: {\n" +
  "    title: {\n" +
  "      type: String,\n" +
  '      default: "Title",\n' +
  "    },\n" +
  "    listOption: {\n" +
  "      type: Array,\n" +
  '      default: () => ["Option 1", "Option 2"],\n' +
  "    },\n" +
  "    isVertical: {\n" +
  "      type: Boolean,\n" +
  "      default: true,\n" +
  "    },\n" +
  "    showTitle: {\n" +
  "      type: Boolean,\n" +
  "      default: true,\n" +
  "    },\n" +
  "    isBold: {\n" +
  "      type: Boolean,\n" +
  "      default: false,\n" +
  "    },\n" +
  "  },\n" +
  "};\n" +
  "</script>\n";

export const select =
  "<template>\n" +
  "  <div>\n" +
  "    <a-form-item>\n" +
  "      <div :class=\"isVertical ? '' : 'flex items-center'\">\n" +
  '        <label v-if="showLabel" class="mr-4 font-bold" :style="{ color }">{{ label }}:</label>\n' +
  '        <a-select :placeholder="showPlaceHolder ? placeholder : \'\'" :show-search="showSearch">\n' +
  '          <a-select-option v-for="value in items" :key="value" :value="value">{{ value }}</a-select-option>\n' +
  "        </a-select>\n" +
  "      </div>\n" +
  "    </a-form-item>\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "import {defineComponent} from 'vue';\n" +
  "import {Form, Select as AntSelect} from 'ant-design-vue';\n" +
  "\n" +
  "export default defineComponent({\n" +
  "  name: 'Select',\n" +
  "  props: {\n" +
  "    placeholder: {\n" +
  "      type: String,\n" +
  "      default: 'Place holder',\n" +
  "    },\n" +
  "    isVertical: {\n" +
  "      type: Boolean,\n" +
  "      default: true,\n" +
  "    },\n" +
  "    showPlaceHolder: {\n" +
  "      type: Boolean,\n" +
  "      default: true,\n" +
  "    },\n" +
  "    label: {\n" +
  "      type: String,\n" +
  "      default: 'Label',\n" +
  "    },\n" +
  "    showLabel: {\n" +
  "      type: Boolean,\n" +
  "      default: true,\n" +
  "    },\n" +
  "    color: {\n" +
  "      type: String,\n" +
  "      default: 'black',\n" +
  "    },\n" +
  "    showSearch: {\n" +
  "      type: Boolean,\n" +
  "      default: false,\n" +
  "    },\n" +
  "    items: {\n" +
  "      type: Array,\n" +
  "      default: ['Item 1', 'Item 2', 'Item 3'],\n" +
  "    },\n" +
  "  },\n" +
  "  components: {\n" +
  "    'a-form-item': Form.Item,\n" +
  "    'a-select': AntSelect,\n" +
  "    'a-select-option': AntSelect.Option,\n" +
  "  },\n" +
  "});\n" +
  "</script>\n";

export const statistic =
  "<template>\n" +
  "  <div>\n" +
  '    <AntStatistic :title="title" :value="value"/>\n' +
  "  </div>\n" +
  "</template>\n" +
  "<script>\n" +
  'import {Statistic as AntStatistic} from "ant-design-vue";\n' +
  "\n" +
  "export default {\n" +
  '  name: "Statistic",\n' +
  "  components: {\n" +
  "    AntStatistic,\n" +
  "  },\n" +
  "  props: {\n" +
  "    title: {\n" +
  "      type: String,\n" +
  '      default: "Title",\n' +
  "    },\n" +
  "    value: {\n" +
  "      type: Number,\n" +
  "      default: 100000,\n" +
  "    },\n" +
  "  },\n" +
  "};\n" +
  "</script>";

export const switchTemplate =
  "<template>\n" +
  "  <div :class=\"{'flex item-center gap-x-2': !isVertical}\">\n" +
  '    <div v-if="showLabel">{{ label }}</div>\n' +
  '    <AntSwitch :default-checked="defaultValue"\n' +
  '               :disabled="isDisable"\n' +
  '               :size="size"/>\n' +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "import {defineComponent} from 'vue'\n" +
  "import {Switch as AntSwitch} from 'ant-design-vue'\n" +
  "\n" +
  "export default defineComponent({\n" +
  "  name: 'Switch',\n" +
  "  components: {AntSwitch},\n" +
  "  props: {\n" +
  "    label: {type: String, default: 'Label'},\n" +
  "    showLabel: {type: Boolean, default: true},\n" +
  "    isVertical: {type: Boolean, default: false},\n" +
  "    defaultValue: {type: Boolean, default: false},\n" +
  "    isDisable: {type: Boolean, default: false},\n" +
  "    size: {type: String, default: 'default'}\n" +
  "  }\n" +
  "})\n" +
  "</script>\n";

export const tab =
  "<template>\n" +
  "  <div>\n" +
  "    <Tabs>\n" +
  '      <TabPane v-for="(tab, index) in tabs" :key="index" :tab="tab">\n' +
  '        <Container :id="index.toString()">\n' +
  "          <slot></slot>\n" +
  "        </Container>\n" +
  "      </TabPane>\n" +
  "    </Tabs>\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  'import {Tabs} from "ant-design-vue";\n' +
  'import Container from "./Container.vue";\n' +
  "\n" +
  "export default {\n" +
  '  name: "Tab",\n' +
  "  components: {Container, Tabs, TabPane: Tabs.TabPane},\n" +
  "  props: {\n" +
  "    tabs: {\n" +
  "      type: Array,\n" +
  '      default: () => ["Tab 1", "Tab 2"]\n' +
  "    },\n" +
  "    children: {\n" +
  "      type: [Array, Object]\n" +
  "    }\n" +
  "  }\n" +
  "};\n" +
  "</script>\n";

export const table =
  "<template>\n" +
  "  <div>\n" +
  '    <TableAntd :columns="columns" :data-source="dataSource"/>\n' +
  "  </div>\n" +
  "</template>\n" +
  "<script>\n" +
  'import {Table as TableAntd} from "ant-design-vue";\n' +
  "\n" +
  "const defaultProps = {\n" +
  "  columns: [\n" +
  '    {title: "Column 1", dataIndex: "column1", key: "column1"},\n' +
  '    {title: "Column 2", dataIndex: "column2", key: "column2"},\n' +
  "  ],\n" +
  "  dataSource: [\n" +
  '    {column1: "Data 1-1", column2: "Data 1-2"},\n' +
  '    {column1: "Data 2-1", column2: "Data 2-2"},\n' +
  '    {column1: "Data 3-1", column2: "Data 3-2"},\n' +
  "  ],\n" +
  "};\n" +
  "\n" +
  "export default {\n" +
  '  name: "Table",\n' +
  "  components: {\n" +
  "    TableAntd,\n" +
  "  },\n" +
  "  props: {\n" +
  "    columns: {\n" +
  "      type: Array,\n" +
  "      default: () => defaultProps.columns,\n" +
  "    },\n" +
  "    dataSource: {\n" +
  "      type: Array,\n" +
  "      default: () => defaultProps.dataSource,\n" +
  "    },\n" +
  "  },\n" +
  "};\n" +
  "</script>";

export const tag =
  "<template>\n" +
  "  <div>\n" +
  "    <TagAntd\n" +
  "        :class=\"['py-1', 'px-2', 'rounded-lg', 'inline-flex', 'items-center']\"\n" +
  '        :color="color"\n' +
  '        :closable="closable"\n' +
  "    >\n" +
  '      <span class="text-xs">{{ text }}</span>\n' +
  "    </TagAntd>\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  'import {Tag as TagAntd} from "ant-design-vue";\n' +
  "\n" +
  "const defaultProps = {\n" +
  '  text: "Tag",\n' +
  '  color: "#1A61AF",\n' +
  "  closable: true,\n" +
  "};\n" +
  "\n" +
  "export default {\n" +
  '  name: "Tag",\n' +
  "  components: {TagAntd},\n" +
  "  props: {\n" +
  "    text: {\n" +
  "      type: String,\n" +
  "      default: defaultProps.text,\n" +
  "    },\n" +
  "    color: {\n" +
  "      type: String,\n" +
  "      default: defaultProps.color,\n" +
  "    },\n" +
  "    closable: {\n" +
  "      type: Boolean,\n" +
  "      default: defaultProps.closable,\n" +
  "    },\n" +
  "  },\n" +
  "};\n" +
  "</script>\n";

export const text =
  "<template>\n" +
  "  <div\n" +
  '      class="mt-4 mb-0"\n' +
  "      :class=\"{ 'font-bold': isBold, italic: isItalic, underline: isUnderline }\"\n" +
  "      :style=\"{ fontSize: fontSize + 'px', textAlign, color }\"\n" +
  '      contenteditable="true"\n' +
  '      @input="handleInput"\n' +
  '      v-html="text"\n' +
  "  ></div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "export default {\n" +
  "  props: {\n" +
  "    text: {\n" +
  "      type: String,\n" +
  "      default: 'Text',\n" +
  "    },\n" +
  "    fontSize: {\n" +
  "      type: Number,\n" +
  "      default: 16,\n" +
  "    },\n" +
  "    isBold: {\n" +
  "      type: Boolean,\n" +
  "      default: false,\n" +
  "    },\n" +
  "    isItalic: {\n" +
  "      type: Boolean,\n" +
  "      default: false,\n" +
  "    },\n" +
  "    isUnderline: {\n" +
  "      type: Boolean,\n" +
  "      default: false,\n" +
  "    },\n" +
  "    textAlign: {\n" +
  "      type: String,\n" +
  "      default: 'left',\n" +
  "    },\n" +
  "    color: {\n" +
  "      type: String,\n" +
  "      default: 'black',\n" +
  "    },\n" +
  "  },\n" +
  "  methods: {\n" +
  "    handleInput(event) {\n" +
  "      console.log(event.target.innerHTML);\n" +
  "    },\n" +
  "  },\n" +
  "};\n" +
  "</script>\n";
