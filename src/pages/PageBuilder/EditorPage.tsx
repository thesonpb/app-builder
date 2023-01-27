import React, { useContext } from "react";
import { Element, Frame } from "@craftjs/core";
import { Container } from "../../components/dragDropContainer";
import { PageBuilderContext } from "../../app/context/PageBuilderContext";

interface Props {
  data: string;
}

function EditorPage({ data }: Props) {
  const { isPreviewEditor } = useContext(PageBuilderContext);

  return (
    <div className="page-container">
      <div
        className={`fixed craftjs-renderer ${
          !isPreviewEditor ? "left-60 right-60" : "left-0 right-0"
        } top-16 small-scroll-bar`}
        // ref={(ref: any) => connectors.select(connectors.hover(ref, null), null)}
      >
        <Frame data={data}>
          <Element
            backgroundColor="#eceff3"
            // className="overflow-auto"
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
            borderRadius="0"
            canvas
          ></Element>
        </Frame>
      </div>
    </div>
  );
}

export default EditorPage;
