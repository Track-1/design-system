import { Meta } from "@storybook/react";

import { useState } from "react";
import Modal from ".";

export default {
  component: Modal,
} as Meta;

export const Default = {
  render: function Render() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onOpen = () => {
      setIsOpen(true);
    };
    const onClose = () => {
      setIsOpen(false);
    };

    return (
      <>
        <button>버튼 눌러 모달 열기</button>
        <Modal header={<>제목</>} isOpen={isOpen} onClose={onClose}>
          <>하이</>
        </Modal>
      </>
    );
  },

  name: "기본",
};
