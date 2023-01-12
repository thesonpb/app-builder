import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";
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
  return (
    <Modal
      destroyOnClose
      open={visible}
      footer={[
        <Button key="back" onClick={() => setVisible(false)}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={() => {
            setVisible(false);
            navigate(`/create-${type.toLowerCase()}`);
          }}
        >
          Submit
        </Button>,
      ]}
      onCancel={() => setVisible(false)}
    >
      {type}
    </Modal>
  );
}
