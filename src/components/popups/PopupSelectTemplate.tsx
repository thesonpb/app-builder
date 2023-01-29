import { Form, Button, Input, Modal, message } from "antd";
import { useNavigate } from "react-router-dom";
import TemplatePreview from "../display/TemplatePreview";
import { useContext, useState } from "react";
import styled from "styled-components";
import Page from "../../app/models/Page";
import { PageBuilderContext } from "../../app/context/PageBuilderContext";
import { useQuery } from "react-query";
import { defaultJson } from "../../app/constants/pageJson";

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
  const { setCurrentProjectName, setCurrentProjectId } =
    useContext(PageBuilderContext);
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState<number>(-1);
  const [projectName, setProjectName] = useState<string>("Untitled");

  const { data: listCurrentPageName } = useQuery(
    ["getListCurrentPageName"],
    async () => {
      return await Page.getListCurrentPageName();
    }
  );

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
            onClick={async () => {
              if (listCurrentPageName?.includes(projectName)) {
                message.error("Duplicate project name");
              } else {
                setVisible(false);
                setCurrentProjectName(projectName);
                const res = await Page.createPage({
                  name: projectName,
                  json: defaultJson,
                });
                setCurrentProjectId(res);
                navigate(`/create-${type.toLowerCase()}/${res}`);
                setSelectedTemplate(-1);
              }
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
          <Input
            defaultValue={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            autoFocus
          />
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
