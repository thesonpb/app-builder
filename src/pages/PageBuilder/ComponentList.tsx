import { Tooltip } from "antd";
import React from "react";
import { Element, useEditor } from "@craftjs/core";
import { Container, Grid } from "../../components/dragDropContainer";
import { Button, Input, Paragraph, Text } from "../../components/dragDropItem";
import GridLayout from "../../app/icons/GridLayout";
import ContainerLayout from "../../app/icons/ContainerLayout";
import ButtonItem from "../../app/icons/ButtonItem";
import ParagraphItem from "../../app/icons/ParagraphItem";
import TextItem from "../../app/icons/TextItem";
import { Component, GroupComponent } from "../../app/models/interface";
import InputIcon from "../../app/icons/InputIcon";

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
        className="flex-col gap-y-2 w-24 rounded-md text-base font-semibold h-24 flex items-center justify-center bg-lightGray cursor-all-scroll"
      >
        <div>{item.icon}</div>
        <div>{item.name}</div>
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
