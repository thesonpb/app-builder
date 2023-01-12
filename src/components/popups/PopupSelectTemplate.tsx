import { Form, Button, Input, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import TemplatePreview from "../display/TemplatePreview";
import { useState } from "react";
interface Props {
  visible: boolean;
  type: string;
  setVisible: Function;
}

export default function PopupSelectTemplate({
  visible,
  type,
  setVisible,
}: Props) {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState<number>(-1);
  return (
    <Modal
      width={600}
      destroyOnClose
      open={visible}
      footer={[
        <Button
          key="back"
          onClick={() => {
            setVisible(false);
            setSelectedTemplate(-1);
          }}
        >
          Cancel
        </Button>,
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
        </Button>,
      ]}
      onCancel={() => setVisible(false)}
    >
      <div className="pt-6">
        <Form.Item label={type === "PAGE" ? "Page name" : "App name"}>
          <Input defaultValue={`New ${type.toLowerCase()}`} autoFocus />
        </Form.Item>
        <TemplatePreview
          type={type}
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />
      </div>
    </Modal>
  );
}
