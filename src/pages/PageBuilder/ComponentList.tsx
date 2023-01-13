import { Tooltip } from "antd";
import React from "react";
import { useEditor, Element } from "@craftjs/core";
import { Column, Container, Row } from "../../components/dragDropContainer";
import { Button, Text } from "../../components/dragDropItem";

interface Props {
  type: number;
}

function ComponentList({ type }: Props) {
  const { connectors } = useEditor();
  //TODO: type de goi api lay danh sach component pho bien Community
  return (
    <div className="text-light">
      {type === 1 && (
        <div className="flex flex-col gap-y-4 pb-20">
          <div className="flex flex-col gap-y-4">
            <h3>CONTAINERS</h3>
            <Tooltip title="Container">
              <div
                ref={(ref: any) =>
                  connectors.create(
                    ref,
                    <Element
                      is={Container}
                      padding="20px"
                      backgroundColor="white"
                      borderColor="black"
                      borderWidth="1px"
                      borderStyle="solid"
                      canvas
                      height="10rem"
                      marginBottom="8px"
                      marginTop="8px"
                    />
                  )
                }
                className="w-full rounded-md text-base font-semibold cursor-pointer h-24 flex items-center justify-center bg-lightGray cursor-all-scroll"
              >
                Container
              </div>
            </Tooltip>
            <Tooltip title="Row">
              <div
                ref={(ref: any) => connectors.create(ref, <Row />)}
                className="w-full rounded-md text-base font-semibold cursor-pointer h-24 flex items-center justify-center bg-lightGray cursor-all-scroll"
              >
                Row
              </div>
            </Tooltip>
            <Tooltip title="Column">
              <div
                ref={(ref: any) => connectors.create(ref, <Column />)}
                className="w-full rounded-md text-base font-semibold cursor-pointer h-24 flex items-center justify-center bg-lightGray cursor-all-scroll"
              >
                Column
              </div>
            </Tooltip>
          </div>
          <div className="flex flex-col gap-y-4">
            <h3>ATOM</h3>
            <div className="grid grid-cols-2 gap-4">
              <Tooltip title="Button">
                <div
                  ref={(ref: any) =>
                    connectors.create(
                      ref,
                      <Button type="primary">Button</Button>
                    )
                  }
                  className="w-full rounded-md text-base font-semibold cursor-pointer h-24 flex items-center justify-center bg-lightGray cursor-all-scroll"
                >
                  Button
                </div>
              </Tooltip>
              <Tooltip title="Text block">
                <div
                  ref={(ref: any) =>
                    connectors.create(ref, <Text text="Text block" block />)
                  }
                  className="w-full rounded-md text-base font-semibold cursor-pointer h-24 flex items-center justify-center bg-lightGray cursor-all-scroll"
                >
                  Text block
                </div>
              </Tooltip>
              <Tooltip title="Text inline">
                <div
                  ref={(ref: any) =>
                    connectors.create(
                      ref,
                      <Text text="Text inline" inlineBlock />
                    )
                  }
                  className="w-full rounded-md text-base font-semibold cursor-pointer h-24 flex items-center justify-center bg-lightGray cursor-all-scroll"
                >
                  Text inline
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ComponentList;
