import React, { useContext, useEffect, useRef } from "react";
import { Element, Frame } from "@craftjs/core";
import { Container } from "../../components/dragDropContainer";
import { PageBuilderContext } from "../../app/context/PageBuilderContext";
import html2canvas from "html2canvas";
import { beUrl } from "../../app/constants/baseUrl";

interface Props {
  data: string;
}

function EditorPage({ data }: Props) {
  const { isPreviewEditor, projectPreview, isSavedSuccess, setSavedSuccess } =
    useContext(PageBuilderContext);

  const editorRef = useRef<HTMLDivElement>(null);

  const handleTakeScreenshot = async () => {
    const screenshotTarget = editorRef.current;
    if (!screenshotTarget) {
      console.error("Cannot take screenshot: editor element not found");
      return;
    }

    setTimeout(() => {
      html2canvas(screenshotTarget).then((canvas) => {
        canvas.toBlob((blob) => {
          const formData = new FormData();
          if (blob) {
            formData.append("file", blob, "screenshot.png");
            formData.append("name", projectPreview);
            if (formData) {
              fetch(`${beUrl}/api/upload/update-image`, {
                method: "POST",
                body: formData,
              }).catch((error) => {
                console.error("Upload failed", error);
              });
            }
          }
        }, "image/png");
      });
    }, 1);
  };

  useEffect(() => {
    if ((data && editorRef.current) || isSavedSuccess) {
      handleTakeScreenshot();
    }
    setSavedSuccess(false);
  }, [data, editorRef.current, isSavedSuccess]);

  return (
    <div
      className={`page-container w-full ${!isPreviewEditor ? "mx-60" : "mx-0"}`}
      style={{ transition: isPreviewEditor ? "all 0.25s" : "all 0.2s" }}
    >
      <div
        ref={editorRef}
        className={`craftjs-renderer top-16 small-scroll-bar`}
        // ref={(ref: any) => connectors.select(connectors.hover(ref, null), null)}
      >
        <Frame data={data}>
          <Element
            backgroundColor="white"
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
