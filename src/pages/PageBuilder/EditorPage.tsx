import React from "react";
import { Frame, Element } from "@craftjs/core";
import { Container } from "../../components/dragDropContainer";
import { Button, Text } from "../../components/dragDropItem";

function EditorPage() {
  return (
    <div className=" fixed left-60 right-60 top-16 small-scroll-bar">
      <Frame>
        <Element
          className="overflow-auto"
          is={Container}
          paddingTop="1rem"
          paddingBottom="1rem"
          paddingLeft="1rem"
          paddingRight="1rem"
          marginTop="0"
          marginBottom="0"
          backgroundColor="#e9ecef"
          height="100vh"
          borderColor="none"
          borderStyle="none"
          borderWidth="none"
          canvas
        >
          <Button />
          <Button />
          <Text />
          <Button />
        </Element>
      </Frame>
    </div>
  );
}

export default EditorPage;
