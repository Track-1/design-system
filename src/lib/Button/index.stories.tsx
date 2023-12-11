import { Meta, StoryObj } from "@storybook/react";
import Button from ".";

interface ButtonOwnProps {
  size?: "small" | "middle" | "large";
  type?: "free" | "bottom";
  backgroundColor?: "purple" | "pink" | "green" | "grey";
  color?: "white" | "black" | "grey";
  disabled?: boolean;
}

type ButtonStoryProps = ButtonOwnProps & { children: string };

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#0D0E11" }],
    },
  },
} as Meta<ButtonStoryProps>;

// 기본 버튼
export const Default: StoryObj<ButtonStoryProps> = {
  args: {
    children: "Default Button",
    disabled: false,
  },
};

// free 버튼
export const Free: StoryObj<ButtonStoryProps> = {
  args: {
    children: "Free Button",
    size: "large",
    backgroundColor: "green",
    color: "black",
    disabled: false,
  },
};

// 바닥 버튼
export const Bottom: StoryObj<ButtonStoryProps> = {
  args: {
    children: "Bottom Button",
    type: "bottom",
    backgroundColor: "green",
    color: "black",
    disabled: false,
  },
};
