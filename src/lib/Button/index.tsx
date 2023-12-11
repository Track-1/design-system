import { ReactNode } from "react";
import { buttonBase, buttonColor, buttonSize, buttonType } from "./style.css";

interface ButtonProps {
  children: ReactNode;
  size?: "small" | "middle" | "large";
  type?: "free" | "bottom";
  color?: "purple" | "pink" | "green" | "grey";
  disabled?: boolean;
}

export default function Button(props: ButtonProps) {
  const { size = "large", type = "free", color = "purple", disabled, children, ...restProps } = props;

  return (
    <button
      type="button"
      className={`${buttonBase} ${buttonSize[size]} ${buttonType[type]} ${buttonColor[color]}`}
      disabled={disabled}>
      {children}
    </button>
  );
}
