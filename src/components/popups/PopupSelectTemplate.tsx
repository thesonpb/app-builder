import { Form, Button, Input, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import TemplatePreview from "../display/TemplatePreview";
import { useState } from "react";
import styled from "styled-components";

interface Props {
  visible: boolean;
  type: string;
  setVisible: Function;
}

const CustomModal = styled(Modal)`
  .ant-modal-content {
    background-color: #343a40;
  }
`;

export default function PopupSelectTemplate({
  visible,
  type,
  setVisible,
}: Props) {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState<number>(-1);
  return (
    <CustomModal
      className="text-light"
      width={600}
      destroyOnClose
      open={visible}
      footer={
        <div className="pt-4">
          <Button
            key="back"
            onClick={() => {
              setVisible(false);
              setSelectedTemplate(-1);
            }}
          >
            Cancel
          </Button>
          <Button
            key="submit"
            type="primary"
            onClick={() => {
              setVisible(false);
              navigate(
                `/create-${type.toLowerCase()}/${
                  selectedTemplate !== -1 ? selectedTemplate : ""
                }`
              );
              setSelectedTemplate(-1);
            }}
          >
            Submit
          </Button>
        </div>
      }
      onCancel={() => setVisible(false)}
    >
      <div className="pt-6">
        <Form.Item
          label={
            <div className="text-light">
              {type === "PAGE" ? "Page name" : "App name"}
            </div>
          }
        >
          <Input defaultValue={`New ${type.toLowerCase()}`} autoFocus />
        </Form.Item>
        <TemplatePreview
          type={type}
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />
      </div>
    </CustomModal>
  );
}
