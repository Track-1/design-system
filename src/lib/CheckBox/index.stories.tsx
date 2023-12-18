import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import CheckBox from ".";

const meta = {
  title: "Components/CheckBox",
  component: CheckBox,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#0D0E11" }],
    },
  },
  tags: ["autodocs"],
} as Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: true,
  },
};

export const Basic: StoryObj = {
  render: function Render() {
    const [checked, onChange] = useState<boolean>(false);
    return <CheckBox checked={checked} onChange={(e) => onChange(e.target.checked)} />;
  },

  name: "checkbox",
};
