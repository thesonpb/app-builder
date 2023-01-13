import React from "react";
import { Frame, Element } from "@craftjs/core";
import { Container } from "../../components/dragDropContainer";
import { Button, Text } from "../../components/dragDropItem";

function EditorPage() {
  return (
    <div className="mx-60 overflow-auto h-screen w-full p-10">
      <Frame>
        <Element is={Container} padding="5px" backgroundColor="red" canvas>
          <Text text="kaakkask" />
          <Button>button</Button>
          <Text text="kaakkask" />
          <Button>button</Button>
          <Text text="kaakkask" />
        </Element>
      </Frame>
    </div>
  );
}

export default EditorPage;
