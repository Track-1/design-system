import { ReactNode } from "react";
import { buttonBackgroundColor, buttonColor, buttonContainer, buttonSize, buttonType } from "./style.css";

interface ButtonProps {
  children: ReactNode;
  size?: "small" | "middle" | "large";
  type?: "free" | "bottom";
  backgroundColor?: "purple" | "pink" | "green" | "grey";
  color?: "white" | "black" | "grey";
  disabled?: boolean;
}

export default function Button(props: ButtonProps) {
  const {
    size = "large",
    type = "free",
    backgroundColor = "purple",
    color = "white",
    disabled,
    children,
    ...restProps
  } = props;

  return (
    <div className={buttonContainer}>
      <button
        type="button"
        className={`${buttonSize[size]} ${buttonType[type]} ${buttonBackgroundColor[backgroundColor]} ${buttonColor[color]}`}
        disabled={disabled}>
        {children}
      </button>
    </div>
  );
}
