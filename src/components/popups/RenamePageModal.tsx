import { Button, Form, Input, message, Modal } from "antd";
import { useContext } from "react";
import { useMutation } from "react-query";
import { AppContext } from "../../app/context/AppContext";
import Page from "../../app/models/Page";
import styled from "styled-components";

const CustomModal = styled(Modal)`
  .ant-modal-content {
    background: #343a40;
  }
`;

const CustomInput = styled(Input)`
  background: #495057 !important;
  border: none !important;
  color: #e9ecef;

  &::placeholder {
    color: #999;
  }

  :where(.css-dev-only-do-not-override-sk7ap8).ant-input-disabled,
  :where(.css-dev-only-do-not-override-sk7ap8).ant-input[disabled] {
    color: #a4a5a7;
  }
`;

const RenamePageModal = ({ visible, setVisible, refetchList, id }: any) => {
  const [form] = Form.useForm();
  const { setAddToShortcut } = useContext(AppContext);

  const renameMutation = useMutation(Page.renamePage, {
    onSuccess: () => {
      setAddToShortcut(true);
      refetchList();
      setVisible(false);
    },
    onError: (e: any) => {
      if (e.response.data === "Page name existed!")
        message.error("Page name existed, please use other name!");
      else message.error("Error occured!");
    },
  });
  const handleOk = (value: any) => {
    renameMutation.mutate({ id, body: value });
  };

  return (
    <CustomModal
      width={400}
      open={visible}
      destroyOnClose
      footer={null}
      closable={false}
      onCancel={() => setVisible(false)}
    >
      <h2 className="text-center text-light">Rename your page</h2>
      <Form form={form} onFinish={handleOk}>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input the new page name!",
            },
          ]}
        >
          <CustomInput size="large" placeholder="Page name" />
        </Form.Item>
        <Button
          className="w-full"
          size="large"
          type="primary"
          htmlType="submit"
        >
          Update
        </Button>
      </Form>
    </CustomModal>
  );
};

export default RenamePageModal;
