import React from "react";
import { Modal } from "antd";

interface Props {
  isOpenSignup: boolean;
  setOpenSignup: any;
}
function Signup({ isOpenSignup, setOpenSignup }: Props) {
  return (
    <Modal
      destroyOnClose
      closable={false}
      onCancel={() => setOpenSignup(false)}
      open={isOpenSignup}
      footer={null}
    >
      Signup heree
    </Modal>
  );
}

export default Signup;
