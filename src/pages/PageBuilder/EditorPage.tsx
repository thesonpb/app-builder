import React, { useContext, useEffect } from "react";
import { Frame, Element, useEditor } from "@craftjs/core";
import { Container } from "../../components/dragDropContainer";
import { Button, Text } from "../../components/dragDropItem";
import { PageBuilderContext } from "../../app/context/PageBuilderContext";

function EditorPage() {
  const { setSerializeJson, isPreviewEditor } = useContext(PageBuilderContext);
  const { query } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  useEffect(() => {
    console.log(query.serialize());
    setSerializeJson(query.serialize());
  }, [query]);

  return (
    <div className="page-container">
      <div
        className={`fixed craftjs-renderer ${
          !isPreviewEditor ? "left-60 right-60" : "left-0 right-0"
        } top-16 small-scroll-bar`}
        // ref={(ref: any) => connectors.select(connectors.hover(ref, null), null)}
      >
        <Frame>
          <Element
            backgroundColor="white"
            className="overflow-auto"
            is={Container}
            paddingTop="1rem"
            paddingBottom="5rem"
            paddingLeft="1rem"
            paddingRight="1rem"
            marginTop="0"
            marginBottom="0"
            height="auto"
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
    </div>
  );
}

export default EditorPage;
