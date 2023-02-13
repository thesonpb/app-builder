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
    <div
      className={`page-container w-full ${!isPreviewEditor ? "mx-60" : "mx-0"}`}
    >
      <div
        className={`craftjs-renderer top-16 small-scroll-bar`}
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
            minHeight="100vh"
            canvas
          ></Element>
        </Frame>
      </div>
    </div>
  );
}

export default EditorPage;
