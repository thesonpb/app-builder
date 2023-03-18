import { Tooltip } from "antd";
import React from "react";
import { Element, useEditor } from "@craftjs/core";
import { Container, Grid } from "../../components/dragDropContainer";
import {
  Button,
  DateTimePicker,
  Input,
  Paragraph,
  Radiobox,
  Text,
  Checkbox,
  Breadcrumbs,
  Image,
  Divider,
  Menu,
  Select,
  Statistic,
  Switch,
  Tab,
  Table,
  Tag,
} from "../../components/dragDropItem";
import GridLayout from "../../app/icons/GridLayout";
import ContainerLayout from "../../app/icons/ContainerLayout";
import ButtonItem from "../../app/icons/ButtonItem";
import ParagraphItem from "../../app/icons/ParagraphItem";
import TextItem from "../../app/icons/TextItem";
import { Component, GroupComponent } from "../../app/models/interface";
import InputIcon from "../../app/icons/InputIcon";
import CheckboxIcon from "../../app/icons/CheckboxIcon";
import RadioboxIcon from "../../app/icons/RadioboxIcon";
import DateIcon from "../../app/icons/DateIcon";
import BreadcrumbIcon from "../../app/icons/BreadcrumbIcon";
import ImageIcon from "../../app/icons/ImageIcon";
import DividerIcon from "../../app/icons/DividerIcon";
import MenuIcon from "../../app/icons/MenuIcon";
import DropdownIcon from "../../app/icons/DropdownIcon";
import StatisticIcon from "../../app/icons/StatisticIcon";
import SwitchIcon from "../../app/icons/SwitchIcon";
import TabIcon from "../../app/icons/TabIcon";
import TableIcon from "../../app/icons/TableIcon";
import TagIcon from "../../app/icons/TagIcon";

interface Props {
  type: number;
}

const items = [
  {
    id: 1,
    groupName: "layouts",
    components: [
      {
        id: 1,
        name: "Container",
        isContainer: true,
        icon: <ContainerLayout />,
        renderItem: Container,
      },
      {
        id: 2,
        name: "Grid",
        isContainer: true,
        icon: <GridLayout />,
        renderItem: Grid,
      },
      // {
      //   id: 3,
      //   name: "Row",
      //   isContainer: false,
      //   icon: <RowLayout />,
      //   renderItem: Row,
      // },
      // {
      //   id: 4,
      //   name: "Column",
      //   isContainer: false,
      //   icon: <ColumnLayout />,
      //   renderItem: Column,
      // },
    ],
  },
  {
    id: 2,
    groupName: "Atoms",
    components: [
      {
        id: 1,
        name: "Button",
        isContainer: false,
        icon: <ButtonItem />,
        renderItem: Button,
      },
      {
        id: 2,
        name: "Text",
        isContainer: false,
        icon: <TextItem />,
        renderItem: Text,
      },
      {
        id: 3,
        name: "Paragraph",
        isContainer: false,
        icon: <ParagraphItem />,
        renderItem: Paragraph,
      },
      {
        id: 4,
        name: "Input",
        isContainer: false,
        icon: <InputIcon />,
        renderItem: Input,
      },
      {
        id: 5,
        name: "Radiobox",
        isContainer: false,
        icon: <RadioboxIcon />,
        renderItem: Radiobox,
      },
      {
        id: 6,
        name: "Checkbox",
        isContainer: false,
        icon: <CheckboxIcon />,
        renderItem: Checkbox,
      },
      {
        id: 7,
        name: "Time Picker",
        isContainer: false,
        icon: <DateIcon />,
        renderItem: DateTimePicker,
      },
      {
        id: 8,
        name: "Bread Crumbs",
        isContainer: false,
        icon: <BreadcrumbIcon />,
        renderItem: Breadcrumbs,
      },
      {
        id: 9,
        name: "Image",
        isContainer: false,
        icon: <ImageIcon />,
        renderItem: Image,
      },
      {
        id: 10,
        name: "Divier",
        isContainer: false,
        icon: <DividerIcon />,
        renderItem: Divider,
      },
      {
        id: 11,
        name: "Menu",
        isContainer: false,
        icon: <MenuIcon />,
        renderItem: Menu,
      },
      {
        id: 12,
        name: "Select",
        isContainer: false,
        icon: <DropdownIcon />,
        renderItem: Select,
      },
      {
        id: 13,
        name: "Statistic",
        isContainer: false,
        icon: <StatisticIcon />,
        renderItem: Statistic,
      },
      {
        id: 14,
        name: "Switch",
        isContainer: false,
        icon: <SwitchIcon />,
        renderItem: Switch,
      },
      {
        id: 15,
        name: "Tab",
        isContainer: false,
        icon: <TabIcon />,
        renderItem: Tab,
      },
      {
        id: 16,
        name: "Table",
        isContainer: false,
        icon: <TableIcon />,
        renderItem: Table,
      },
      {
        id: 17,
        name: "Tag",
        isContainer: false,
        icon: <TagIcon />,
        renderItem: Tag,
      },
    ],
  },
];

function ComponentList({ type }: Props) {
  const { connectors } = useEditor();
  //TODO: type de goi api lay danh sach component pho bien Community

  const renderGroup = (group: GroupComponent) => (
    <div key={group.id} className="flex flex-col gap-y-4">
      <h3 className="uppercase">{group.groupName}</h3>
      <div className="grid grid-cols-2 gap-4">
        {group.components?.map((item) => renderItem(item, group.id))}
      </div>
    </div>
  );

  const renderItem = (item: Component, parentId: number) => (
    <Tooltip title={item.name} key={`${parentId}_${item.id}`}>
      <div
        ref={(ref: any) =>
          connectors.create(
            ref,
            <Element is={item.renderItem} canvas={item.isContainer} />
          )
        }
        className="flex-col w-24 rounded-md text-base font-semibold h-24 flex items-center justify-center bg-lightGray cursor-all-scroll"
      >
        <div>{item.icon}</div>
        <div className="text-center">{item.name}</div>
      </div>
    </Tooltip>
  );
  return (
    <div className="text-light">
      {type === 1 && (
        <div className="flex flex-col gap-y-4 pb-20">
          {items?.map((item) => renderGroup(item))}
        </div>
      )}
    </div>
  );
}

export default ComponentList;
