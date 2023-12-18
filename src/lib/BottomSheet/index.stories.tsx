import { Meta } from "@storybook/react";

import { useState } from "react";
import { BottomSheet } from ".";

export default {
  component: BottomSheet,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#0D0E11" }],
    },
  },
} as Meta;

export const Default = {
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    function onClose() {
      setIsOpen(false);
    }

    function onOpen() {
      setIsOpen(true);
    }

    return (
      <>
        <button type="button" onClick={onOpen}>
          클릭하여 바텀시트 열기
        </button>
        <BottomSheet isOpen={isOpen} onClose={onClose} header="Category">
          <>
            바텀시트
            <br />
            바텀시트
            <br />
            바텀시트
            <br />
            바텀시트
            <br />
            바텀시트
          </>
        </BottomSheet>
      </>
    );
  },
};
