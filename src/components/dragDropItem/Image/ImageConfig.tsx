import React from "react";
import { useNode } from "@craftjs/core";
import ComponentConfigTemplate from "../../display/ComponentConfigTemplate";
import { Button, Input, message, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { beUrl } from "../../../app/constants/baseUrl";

function ImageConfig() {
  const {
    actions: { setProp },
    width,
  } = useNode((node: any) => ({
    width: node.data.props.width,
  }));

  const handleUpload = (info: any) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
      setProp(
        (props: any) =>
          (props.src = `${beUrl}/resources/images/${info.file.response}`)
      );
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <div className="flex flex-col gap-y-4 pb-20">
      <ComponentConfigTemplate configName="General">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Width</div>
          <Input
            className="w-1/2"
            placeholder="Items"
            defaultValue={width}
            onChange={(e) =>
              setProp((props: any) => (props.width = Number(e.target.value)))
            }
          />
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <div className="w-1/2">Upload Image</div>
          <Upload
            name="file"
            action={`${beUrl}/api/upload/image`}
            onChange={handleUpload}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </div>
      </ComponentConfigTemplate>
    </div>
  );
}

export default ImageConfig;
