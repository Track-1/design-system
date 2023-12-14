import type { Meta, StoryObj } from "@storybook/react";
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
