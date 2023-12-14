import { style, styleVariants } from "@vanilla-extract/css";

export const checkBoxWrapper = style({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});

export const checkBoxInput = style({
  position: "absolute",
  width: "2rem",
  height: "2rem",
  overflow: "hidden",
  whiteSpace: "nowrap",
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
});

const checkBoxBase = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "0.2s background-color",
  borderRadius: "0.3rem",
  width: "2rem",
  height: "2rem",
});

export const checkBoxChecked = styleVariants({
  true: [checkBoxBase, { backgroundColor: "#5200FF", border: "1px solid #5200FF" }],
  false: [checkBoxBase, { border: "1px solid #62656C" }],
});

export const checkSize = style({
  width: "1.2rem",
});
